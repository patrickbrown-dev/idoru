require 'rails_helper'

RSpec.describe Feed, :type => :model do

  # TODO(ptrckbrwn): close file.
  let!(:rss_xml) { File.open("spec/fixtures/rss.xml", "rb").read }
  let(:parser) { double(fetch_and_parse: Feedjira::Feed.parse(rss_xml)) }

  # Associations -------------------------------------------------------

  it { should have_many :articles }
  it { should belong_to :user }

  # Validations --------------------------------------------------------

  it { should validate_presence_of :title }
  it { should validate_presence_of :url }

  # Class Methods ------------------------------------------------------

  describe "#create_and_update" do
    it "should update_meta after creation" do
      feed = Feed.create_and_update({url: "https://xkcd.com/rss.xml"}, parser)

      expect(feed.title).to eq("xkcd.com")

    end
  end

  # Instance Methods ---------------------------------------------------

  describe "#update_meta" do
    it "should update title" do
      feed = Feed.new(title: "foo", url: "https://xkcd.com/rss.xml")
      feed.update_meta(parser)

      expect(feed.title).to eq("xkcd.com")
    end

    it "should set updated_at to now" do
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: 1.week.ago)
      now = Time.now.round
      Timecop.freeze(now) do
        feed.update_meta(parser)
      end

      expect(feed.updated_at.round).to eq(now)
    end
  end

  describe "#update_articles" do
    it "should cache articles for 1 day" do
      an_hour_ago = 1.hour.ago
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: an_hour_ago)
      feed.update_articles(parser)

      expect(feed.updated_at.round).to eq(an_hour_ago.round)
    end

    it "should save new Article for each entry" do
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: 1.week.ago)
      feed.update_articles(parser)

      expect(Article.all.count).to_not eq(0)
      expect(Article.all.count).to_not eq(nil)
    end

    it "should update existing Articles if they have same url" do
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: 1.week.ago)
      feed.update_articles(parser)
      old_total_articles = Article.all.count
      feed.update_articles(parser)
      expect(Article.all.count).to eq(old_total_articles)
    end

    it "should set feed updated_at to now" do
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: 1.week.ago)
      now = Time.zone.now
      Timecop.freeze(now) do
        feed.update_articles(parser)
      end

      expect(feed.updated_at.round).to eq(now.round)
    end

    it "should set articles update_at to now" do
      pending "considering removing feature"
      one_week_ago = 1.week.ago
      feed = Feed.new(title: "xkcd.com",
                      url: "https://xkcd.com/rss.xml",
                      updated_at: one_week_ago)

      Timecop.freeze(one_week_ago) do
        feed.update_articles(parser)
      end

      now = Time.zone.now
      Timecop.freeze(now) do
        feed.update_articles(parser)
      end

      expect(Article.all.first.updated_at.round).to eq(now.round)
    end
  end

  describe "#purge" do
    let(:new_time) { 1.day.ago.round }
    let(:old_time) { 3.days.ago.round }
    let(:feed) { Feed.new(title: "xkcd.com",
                          url: "https://xkcd.com/rss.xml",
                          updated_at: new_time,
                          purged_at: old_time) }
    before(:each) do
      @new_article = Article.new(feed: feed,
                                 title: "new",
                                 url: "https://xkcd.com/new",
                                 full_story: true,
                                 updated_at: new_time).save!
      @old_article = Article.new(feed: feed,
                                 title: "old",
                                 url: "https://xkcd.com/old",
                                 full_story: true,
                                 updated_at: old_time).save!
    end

    it "should delete articles that haven't been updated in over a day" do
      feed.purge
      expect(feed.articles.count).to eq(1)
    end

    it "should update last_purged_at" do
      now = Time.now.round
      Timecop.freeze(now) { feed.purge }
      expect(feed.purged_at.round).to eq(now)
    end
  end
end
