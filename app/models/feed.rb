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
    return unless valid?
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
      @@feed_memo[id] = { feed: Feedjira::Feed.fetch_and_parse(url),
                          cached_at: Time.zone.now }
    end
  end

  private

  def feed
    update_feed
    @@feed_memo[id][:feed]
  end

  def should_update?
    return true if @@feed_memo[id].nil? ||
                   @@feed_memo[id][:cached_at] < 30.minutes.ago
    false
  end
end
