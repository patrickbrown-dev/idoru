require 'rails_helper'

RSpec.describe Feed, :type => :model do
  let(:rss_file) { File.open("spec/fixtures/rss.xml", "rb") }
  let!(:rss_xml) { rss_file.read }

  before do
    allow(Feedjira::Feed).to receive(:fetch_and_parse) do
      Feedjira::Feed.parse(rss_xml)
    end
  end

  after do
    rss_file.close
  end

  it { should have_many :articles }
  it { should have_many(:users).through(:subscriptions) }

  it { should validate_presence_of :url }
  it { should validate_uniqueness_of :url }

  describe "::update_feeds_concurrently" do
    let!(:feed) { Feed.create(url: "https://xkcd.com/rss.xml") }

    it "creates the correct number of articles" do
      Feed.update_feeds_concurrently [feed]
      expect(feed.reload.articles.count).to_not eq(0)
    end
  end

  describe "#create_and_update" do
    it "should update_meta after creation" do
      feed = Feed.create!(url: "https://xkcd.com/rss.xml")
      expect(feed.title).to eq("xkcd.com")
    end
  end

  describe "#update_meta" do
    it "should update title" do
      feed = Feed.new(title: "foo", url: "https://xkcd.com/rss.xml")
      feed.update_meta

      expect(feed.title).to eq("xkcd.com")
    end

    it "should set updated_at to now" do
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: 1.week.ago)
      now = Time.now.round
      Timecop.freeze(now) { feed.update_meta }

      expect(feed.updated_at.round).to eq(now)
    end
  end

  describe "#update_articles" do
    let!(:feed) { Feed.new(title: "xkcd.com",
                           url: "https://xkcd.com/rss.xml",
                           updated_at: 1.week.ago) }

    it "should save new Article for each entry" do
      feed.update_articles
      expect(feed.articles.count).to_not eq(0)
    end

    it "should update existing Articles if they have same url" do
      feed.update_articles
      old_total_articles = feed.articles.count
      feed.update_articles

      expect(feed.reload.articles.count).to eq(old_total_articles)
    end

    it "should set feed updated_at to now" do
      now = Time.zone.now
      Timecop.freeze(now) { feed.update_articles }

      expect(feed.updated_at.round).to eq(now.round)
    end

    describe "when feed is down" do
      before do
        allow(Feedjira::Feed).to receive(:fetch_and_parse) { 404 }
      end

      it "should set status to bad on dead feed" do
        feed.update_articles
        expect(feed.status).to eq(:bad)
      end

      it "should set status to ok when feed is back up" do
        feed.update_articles # set feed in bad state

        allow(Feedjira::Feed).to receive(:fetch_and_parse) do
          Feedjira::Feed.parse(rss_xml)
        end
        feed.update_articles
        expect(feed.status).to eq(:ok)
        expect(feed.articles.count).to_not eq(0)
      end
    end
  end
end
