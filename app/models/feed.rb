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
    feed
  end

  # Instance Methods ---------------------------------------------------

  def update_meta(parser = Feedjira::Feed)
    feed = parser.fetch_and_parse(url)
    self.update_attributes!(title: feed.title, updated_at: Time.zone.now)
  end

  def update_articles(parser = Feedjira::Feed)
    feed = parser.fetch_and_parse(url)

    feed.entries.each do |entry|
      article = Article.where(url: entry.url, feed: self).first

      if article.nil?
        article = Article.new(title: entry.title,
                              url: entry.url,
                              summary: entry.summary,
                              body: entry.content,
                              feed: self)
        article.save!
      else
        article.update_attributes!(title: entry.title,
                                   summary: entry.summary,
                                   body: entry.content,
                                   updated_at: Time.zone.now)
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

end
