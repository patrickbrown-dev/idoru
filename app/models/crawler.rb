class Crawler
  class << self
    def crawl
      log "Crawl started"
      Feed.update_feeds_concurrently(feeds_to_update)
      log "Crawl finished successfully"
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
  end
end
