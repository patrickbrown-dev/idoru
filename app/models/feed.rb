class Feed < ActiveRecord::Base

  # Associations -------------------------------------------------------

  has_many :articles
  belongs_to :user

  # Validations --------------------------------------------------------

  validates_presence_of(:title)
  validates_presence_of(:url)
  validate :valid_feed

  # Class Methods ------------------------------------------------------

  def self.create_and_update(params)
    feed_record = self.new(params)
    if feed_record.valid?
      feed_record.update_meta
      feed_record.update_articles(true)
      feed_record
    else
      raise ActiveRecord::RecordInvalid.new(feed_record)
    end
  end

  # Instance Methods ---------------------------------------------------

  def update_meta
    self.update_attributes!(title: feed.title, updated_at: Time.zone.now)
  end

  def update_articles(force_update = false)
    return unless (update_candidate? || force_update) && valid?
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

  def update_candidate?
    time_since_update = Time.zone.now - updated_at
    time_since_update > 1.day
  end

  def valid_feed
    errors[:base] << "Bad response" unless feed.is_a?(Feedjira::Parser::RSS)
  end
end
