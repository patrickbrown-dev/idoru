class Crawler
  def self.crawl
    Feed.update_feeds_concurrently(feeds_to_update)
  end

  def self.feeds_to_update
    Feed.order(updated_at: :desc).limit(50)
  end
end
