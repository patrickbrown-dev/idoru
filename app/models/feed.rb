class Feed < ActiveRecord::Base

  # Validations
  validates_presence_of(:title)
  validates_presence_of(:url)

  def update_meta
    feed = Feedjira::Feed.fetch_and_parse(url)
    self.update_attributes!(title: feed.title)
  end

  def save_articles
    feed = Feedjira::Feed.fetch_and_parse(url)
    
    feed.entries.each do |entry|
      article = Article.new(title: entry.title,
                            url: entry.url,
                            summary: entry.summary)
      article.save!
    end
  end

end
