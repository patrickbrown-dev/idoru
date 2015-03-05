require "rails_helper"

RSpec.describe Crawler do
  describe "::crawl" do
    it "updates 50 feeds at a time"
    it "notifies datadog when run succeeds"
    it "logs error when unsuccessful"
  end
end
