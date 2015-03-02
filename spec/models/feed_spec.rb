require 'rails_helper'

RSpec.describe Feed, :type => :model do
  # TODO(ptrckbrwn): close file.
  let!(:rss_xml) { File.open("spec/fixtures/rss.xml", "rb").read }

  before do
    allow(Feedjira::Feed).to receive(:fetch_and_parse) do
      Feedjira::Feed.parse(rss_xml)
    end
  end

  it { should have_many :articles }
  it { should have_many(:users).through(:subscriptions) }

  it { should validate_presence_of :url }
  it { should validate_uniqueness_of :url }

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
    it "should save new Article for each entry" do
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: 1.week.ago)
      feed.update_articles

      expect(Article.all.count).to_not eq(0)
      expect(Article.all.count).to_not eq(nil)
    end

    it "should update existing Articles if they have same url" do
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: 1.week.ago)
      feed.update_articles
      old_total_articles = Article.all.count
      feed.update_articles

      expect(Article.all.count).to eq(old_total_articles)
    end

    it "should set feed updated_at to now" do
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: 1.week.ago)
      now = Time.zone.now
      Timecop.freeze(now) { feed.update_articles }

      expect(feed.updated_at.round).to eq(now.round)
    end
  end
end
