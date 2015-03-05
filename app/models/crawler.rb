require "statsd"

class Crawler
  class << self
    def crawl
      log "Crawl started"
      Feed.update_feeds_concurrently(feeds_to_update)
      log "Crawl finished successfully"
      dd.increment("crawler.successful_crawls")
    rescue => e
      log "Crawl finished with error: #{e}"
    end

    private

    def feeds_to_update
      Feed.order(updated_at: :desc).limit(50)
    end

    def log message
      Rails.logger.info "#{Time.zone.now} :: #{message}"
    end

    def dd
      @dd ||= Statsd.new('localhost', 8125)
    end
  end
end
