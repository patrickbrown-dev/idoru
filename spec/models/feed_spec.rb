require 'rails_helper'

RSpec.describe Feed, :type => :model do

  # Validations
  it { should validate_presence_of :title }
  it { should validate_presence_of :url }

  describe "#update_meta" do
    it "should update title" do
      feed = Feed.new(title: "foo", url: "https://xkcd.com/rss.xml")
      feed.update_meta
      expect(feed.title).to eq("xkcd.com")
    end
  end

  describe "#save_articles" do
    it "should save new Article for each entry" do
      feed = Feed.new(title: "xkcd.com", url: "https://xkcd.com/rss.xml")
      feed.save_articles

      expect(Article.all.count).to_not eq(0)
      expect(Article.all.count).to_not eq(nil)
    end

    it "should update existing Articles if they have same url" do
      feed = Feed.new(title: "xkcd.com", url: "https://xkcd.com/rss.xml")
      feed.save_articles
      old_total_articles = Article.all.count

      feed.save_articles
      expect(Article.all.count).to eq(old_total_articles)
    end
  end
end
