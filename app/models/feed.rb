require "thread/pool"

class Feed < ActiveRecord::Base
  has_many :articles
  has_many :subscriptions
  has_many :users, through: :subscriptions

  validates :url, presence: true
  validates :url, uniqueness: { case_sensitive: false }

  after_create :update_meta, :update_articles

  @@feed_memo = {}

  def self.update_feeds_concurrently(feeds)
    pool = Thread.pool(24)
    feeds.each do |feed|
      pool.process { feed.update_feed }
    end
    pool.shutdown

    # SQL UPDATES still need to be handled sequentially
    feeds.map(&:update_articles)
  end

  def update_meta
    self.update_attributes!(title: feed.title, updated_at: Time.zone.now)
  end

  def update_articles
    return if @status == :bad
    return if updated_at > @@feed_memo[id][:cached_at]
    feed.entries.each do |entry|
      article = Article.where(url: entry.url, feed: self).first
      if article.nil?
        Article.create!(title: entry.title,
                        url: entry.url,
                        summary: entry.summary,
                        published_at: entry.published,
                        author: entry.author,
                        body: entry.content,
                        feed: self)
      end
      self.update_attributes!(updated_at: Time.zone.now)
    end
  end

  def update_feed
    if should_update?
      @@feed_memo[id] = { feed: remote_feed,
                          cached_at: Time.zone.now }
    end
  end

  private

  def feed
    update_feed
    @@feed_memo[id][:feed]
  end

  def remote_feed
    # Feedjira handles bad responses really poorly (sets return to a
    # Fixnum). If we get a bad response we'll need to ignore the
    # garbage response until we get a good one.
    feed = Feedjira::Feed.fetch_and_parse(url)
    if feed.is_a?(Fixnum)
      @status = :bad
    else
      @status = :ok
    end
    feed
  end

  def should_update?
    @@feed_memo[id].nil? ||
      @@feed_memo[id][:cached_at] < 90.minutes.ago ||
      @status == :bad
  end
end
