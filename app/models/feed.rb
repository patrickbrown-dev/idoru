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
    feed_record = new(params)
    feed_record.title = params[:url] # Set title to url temporarily
    if feed_record.valid?
      feed_record.update_meta
      feed_record.update_articles
      feed_record
    else
      raise ActiveRecord::RecordInvalid.new(feed_record)
    end
  end

  # Instance Methods ---------------------------------------------------

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

  def valid_feed
    errors[:base] << "Bad response" unless feed.is_a?(Feedjira::Parser::RSS)
  end
end
