class Feed < ActiveRecord::Base
  has_many :articles
  has_many :subscriptions
  has_many :users, through: :subscriptions

  validates :url, presence: true
  validates :url, uniqueness: { case_sensitive: false }

  after_create :update_meta, :update_articles

  def self.top(count=25)
    joins(:subscriptions).
      group("feeds.id").
      order("COUNT(subscriptions.id) DESC").
      limit(count)
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

  private

  def feed
    @feed ||= Feedjira::Feed.fetch_and_parse(url)
  end
end
