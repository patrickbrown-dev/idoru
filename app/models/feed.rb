class Feed < ActiveRecord::Base

  # Associations -------------------------------------------------------

  has_many :articles
  belongs_to :user

  # Validations --------------------------------------------------------

  validates_presence_of(:title)
  validates_presence_of(:url)

  # Class Methods ------------------------------------------------------

  def self.create_and_update(params, parser = Feedjira::Feed)
    feed = self.new(params)
    feed.update_meta(parser)
    feed.update_articles(parser, true)
    feed
  end

  # Instance Methods ---------------------------------------------------

  def update_meta(parser = Feedjira::Feed)
    feed = parser.fetch_and_parse(url)
    self.update_attributes!(title: feed.title, updated_at: Time.zone.now)
  end

  def update_articles(parser = Feedjira::Feed, force_update = false)
    return unless update_candidate? || force_update

    feed = parser.fetch_and_parse(url)
    feed.entries.each do |entry|
      article = Article.where(url: entry.url, feed: self).first

      if article.nil?
        article = Article.create!(title: entry.title,
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

  def purge
    self.articles.each do |article|
      if (self.updated_at - article.updated_at) > 1.day
        article.destroy
      end
    end
    self.purged_at = Time.zone.now
    self.save!
  end

  private

  def update_candidate?
    time_since_creation = Time.zone.now - self.created_at
    time_since_update   = Time.zone.now - self.updated_at
    time_since_creation < 1.day || time_since_update > 1.day
  end
end
