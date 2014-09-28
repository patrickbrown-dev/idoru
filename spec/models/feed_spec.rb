require 'rails_helper'

RSpec.describe Feed, :type => :model do

  let(:parser) do
    double(Feedjira::Feed,
           fetch_and_parse: Feedjira::Feed.parse(%{ <?xml version="1.0" encoding="utf-8"?><rss version="2.0"><channel><title>xkcd.com</title><link>http://xkcd.com/</link><description>xkcd.com: A webcomic of romance and math humor.</description><language>en</language><item><title>Reduce Your Payments</title><link>http://xkcd.com/1426/</link><description>&lt;img src="http://imgs.xkcd.com/comics/reduce_your_payments.png" title="I tried oxidizing them, but your bank uses some really weird paper and it wouldn't light." alt="I tried oxidizing them, but your bank uses some really weird paper and it wouldn't light." /&gt;</description><pubDate>Fri, 26 Sep 2014 04:00:00 -0000</pubDate><guid>http://xkcd.com/1426/</guid></item><item><title>Tasks</title><link>http://xkcd.com/1425/</link><description>&lt;img src="http://imgs.xkcd.com/comics/tasks.png" title="In the 60s, Marvin Minsky assigned a couple of undergrads to spend the summer programming a computer to use a camera to identify objects in a scene. He figured they'd have the problem solved by the end of the summer. Half a century later, we're still working on it." alt="In the 60s, Marvin Minsky assigned a couple of undergrads to spend the summer programming a computer to use a camera to identify objects in a scene. He figured they'd have the problem solved by the end of the summer. Half a century later, we're still working on it." /&gt;</description><pubDate>Wed, 24 Sep 2014 04:00:00 -0000</pubDate><guid>http://xkcd.com/1425/</guid></item><item><title>En Garde</title><link>http://xkcd.com/1424/</link><description>&lt;img src="http://imgs.xkcd.com/comics/en_garde.png" title="'Touch!' 'Nope, I sighed and stared at you with resignation, so I regained emotional right-of-way.'" alt="'Touch!' 'Nope, I sighed and stared at you with resignation, so I regained emotional right-of-way.'" /&gt;</description><pubDate>Mon, 22 Sep 2014 04:00:00 -0000</pubDate><guid>http://xkcd.com/1424/</guid></item><item><title>Conversation</title><link>http://xkcd.com/1423/</link><description>&lt;img src="http://imgs.xkcd.com/comics/conversation.png" title="Later, at home: 'Dear diary: Still can't figure out what to write here ...'" alt="Later, at home: 'Dear diary: Still can't figure out what to write here ...'" /&gt;</description><pubDate>Fri, 19 Sep 2014 04:00:00 -0000</pubDate><guid>http://xkcd.com/1423/</guid></item></channel></rss> }))
  end

  # Validations
  it { should validate_presence_of :title }
  it { should validate_presence_of :url }

  describe "#update_meta" do
    it "should update title" do
      feed = Feed.new(title: "foo", url: "https://xkcd.com/rss.xml")
      feed.update_meta(parser)
      expect(feed.title).to eq("xkcd.com")
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
  end
end
