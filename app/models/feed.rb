class Feed < ActiveRecord::Base

  # Associations -------------------------------------------------------

  has_many :articles

  # Validations --------------------------------------------------------

  validates_presence_of(:title)
  validates_presence_of(:url)

  # Instance Methods ---------------------------------------------------
 
  def update_meta(parser = Feedjira::Feed)
    feed = parser.fetch_and_parse(url)
    self.update_attributes!(title: feed.title, updated_at: Time.zone.now)
  end

  def update_articles(parser = Feedjira::Feed)
    feed = parser.fetch_and_parse(url)
    
    feed.entries.each do |entry|
      article = Article.where(url: entry.url).first

      if article.nil?
        article = Article.new(title: entry.title,
                              url: entry.url,
                              summary: entry.summary,
                              feed: self)
        article.save!
      else
        article.update_attributes!(title: entry.title,
                                   summary: entry.summary,
                                   updated_at: Time.zone.now)
      end

      self.update_attributes!(updated_at: Time.zone.now)
    end
  end

end
