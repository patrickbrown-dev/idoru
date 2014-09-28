class Feed < ActiveRecord::Base

  # Validations
  validates_presence_of(:title)
  validates_presence_of(:url)

  def update_meta(parser = Feedjira::Feed)
    feed = parser.fetch_and_parse(url)
    self.update_attributes!(title: feed.title)
  end

  def update_articles(parser = Feedjira::Feed)
    feed = parser.fetch_and_parse(url)
    
    feed.entries.each do |entry|
      article = Article.where(url: entry.url).first

      if article.nil?
        article = Article.new(title: entry.title,
                              url: entry.url,
                              summary: entry.summary)
        article.save!
      else
        article.update_attributes!(title: entry.title,
                                   url: entry.url,
                                   summary: entry.summary)
      end
    end
  end

end
