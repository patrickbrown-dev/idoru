require 'rails_helper'

RSpec.describe Feed, :type => :model do

  # TODO(ptrckbrwn): close file.
  let!(:rss_xml) { File.open("spec/fixtures/rss.xml", "rb").read }
  let(:parser) { double(fetch_and_parse: Feedjira::Feed.parse(rss_xml)) }
  
  # Associations -------------------------------------------------------

  it { should have_many :articles }

  # Validations --------------------------------------------------------

  it { should validate_presence_of :title }
  it { should validate_presence_of :url }

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
      now = Time.zone.now
      Timecop.freeze(now) do
        feed.update_meta(parser)
      end
      
      expect(feed.updated_at).to eq(now)
    end
  end

  describe "#save_articles" do
    it "should save new Article for each entry" do
      feed = Feed.new(title: "xkcd.com", url: "https://xkcd.com/rss.xml")
      feed.update_articles(parser)

      expect(Article.all.count).to_not eq(0)
      expect(Article.all.count).to_not eq(nil)
    end

    it "should update existing Articles if they have same url" do
      feed = Feed.new(title: "xkcd.com", url: "https://xkcd.com/rss.xml")
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

      expect(feed.updated_at).to eq(now)
    end

    it "should set articles update_at to now" do
      feed = Feed.new(title: "xkcd.com", url: "https://xkcd.com/rss.xml")
  
      one_week_ago = 1.week.ago
      Timecop.freeze(one_week_ago) do
        feed.update_articles(parser)
      end

      now = Time.zone.now
      Timecop.freeze(now) do
        feed.update_articles(parser)
      end

      expect(Article.all.first.updated_at).to eq(now)
    end
 
  end
end
