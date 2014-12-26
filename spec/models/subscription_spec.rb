require "rails_helper"

RSpec.describe Subscription, type: :model do
  it { should belong_to :user }
  it { should belong_to :feed }

  it { should validate_presence_of :feed }
  it { should validate_presence_of :user }

  describe ".feeds_for_user" do
    let(:user) { User.create!(email: "test@user.com", password: "testpass") }
    let(:feed1) { Feed.create!(url: "https://xkcd.com/rss.xml") }
    let(:feed2) { Feed.create!(url: "http://daringfireball.net/feeds/main") }

    before do
      Subscription.create!(user: user, feed: feed1)
      Subscription.create!(user: user, feed: feed2)
    end

    it "returns all feeds for a user" do
      feeds = Subscription.feeds_for_user(user)
      expect(feeds).to eq([feed1, feed2])
    end
  end

  describe ".users_for_feed" do
    let(:user1) { User.create!(email: "test@user1.com", password: "testpass") }
    let(:user2) { User.create!(email: "test@user2.com", password: "testpass") }
    let(:feed) { Feed.create!(url: "http://daringfireball.net/feeds/main") }

    before do
      Subscription.create!(user: user1, feed: feed)
      Subscription.create!(user: user2, feed: feed)
    end

    it "returns all feeds for a user" do
      users = Subscription.users_for_feed(feed)
      expect(users).to eq([user1, user2])
    end
  end

  describe ".subscribe_to_url" do
    let(:user) { User.create!(email: "test@user.com", password: "testpass") }
    let(:url) { "https://xkcd.com/rss.xml" }

    it "creates a subscription model with associated feed" do
      sub = Subscription.subscribe_to_url(user, url)
      expect(sub.feed.url).to eq(url)
    end

    it "creates a subscription model with associated user" do
      sub = Subscription.subscribe_to_url(user, url)
      expect(sub.user).to eq(user)
    end

    it "uses existing feed if already exists" do
      feed = Feed.create!(url: url)
      sub = Subscription.subscribe_to_url(user, url)
      expect(sub.feed).to eq(feed)
    end
  end
end
