require 'rails_helper'

RSpec.describe User, :type => :model do

  # Associations -------------------------------------------------------

  it { should have_many(:feeds) }

  # Instance Methods ---------------------------------------------------
  
  describe "#is_admin" do
    it "should default to false" do
      expect(User.new.is_admin).to eq(false)
    end
  end
  
  describe "#create_feed" do
    it "should create a feed object with url as a param." do
      user = User.new
      url = "http://xkcd.com/rss.xml"
      feed = user.create_feed(url)

      expect(feed.url).to eq(url)
    end

    it "should be associated with user." do
      user = User.new
      url = "http://xkcd.com/rss.xml"
      feed = user.create_feed(url)

      expect(feed.user).to eq(user)
    end

  end
end
