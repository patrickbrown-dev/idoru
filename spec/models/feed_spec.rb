require 'rails_helper'

RSpec.describe Feed, :type => :model do

  # TODO(ptrckbrwn): close file.
  let!(:rss_xml) { File.open("spec/fixtures/rss.xml", "rb").read }

  # Associations -------------------------------------------------------

  it { should have_many :articles }
  it { should belong_to :user }

  # Validations --------------------------------------------------------

  it { should validate_presence_of :title }
  it { should validate_presence_of :url }

  describe "bad urls" do
    let(:bad_url) { "http://not.a.feed/" }

    it "shouldn't be valid" do
      feed = Feed.new({url: bad_url})
      feed.valid?
      expect(feed.errors[:base]).to eq(["Bad response"])
    end
  end

  # Class Methods ------------------------------------------------------

  describe "#create_and_update" do
    before do
      allow(Feedjira::Feed).to receive(:fetch_and_parse) do
        Feedjira::Feed.parse(rss_xml)
      end
    end

    it "should update_meta after creation" do
      feed = Feed.create_and_update({url: "https://xkcd.com/rss.xml"})
      expect(feed.title).to eq("xkcd.com")
    end
  end

  # Instance Methods ---------------------------------------------------

  describe "#update_meta" do
    before do
      allow(Feedjira::Feed).to receive(:fetch_and_parse) do
        Feedjira::Feed.parse(rss_xml)
      end
    end

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
    before do
      allow(Feedjira::Feed).to receive(:fetch_and_parse) do
        Feedjira::Feed.parse(rss_xml)
      end
    end

    it "should cache articles for 1 day" do
      now = Time.zone.now
      an_hour_ago = now - 1.hour
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: an_hour_ago)
      Timecop.freeze(now) { feed.update_articles }

      expect(feed.updated_at.round).to eq(an_hour_ago.round)
    end

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

    it "should set articles update_at to now" do
      pending "considering removing feature"
      one_week_ago = 1.week.ago
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: one_week_ago)

      Timecop.freeze(one_week_ago) { feed.update_articles }

      now = Time.zone.now
      Timecop.freeze(now) { feed.update_articles }

      expect(Article.all.first.updated_at.round).to eq(now.round)
    end
  end
end
