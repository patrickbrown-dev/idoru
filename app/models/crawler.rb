class Crawler
  class << self
    def crawl
      io "Crawl started"
      Feed.update_feeds_concurrently(feeds_to_update)
      io "Crawl finished successfully"
    rescue => e
      io "Crawl finished with error: #{e}"
    end

    private

    def feeds_to_update
      Feed.order(updated_at: :desc).limit(50)
    end

    def io message
      puts "#{Time.zone.now} :: #{message}"
    end
  end
end
