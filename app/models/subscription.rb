class Subscription < ActiveRecord::Base
  belongs_to :feed
  belongs_to :user

  validates :feed, uniqueness: { scope: :user }
  validates :feed, :user, presence: true

  def self.feeds_for_user(user)
    Subscription.where(user: user).map { |sub| sub.feed }
  end

  def self.users_for_feed(feed)
    Subscription.where(feed: feed).map { |sub| sub.user }
  end

  def self.subscribe_to_url(user, url)
    feed = Feed.find_or_create_by(url: url)
    Subscription.create!(feed: feed, user: user)
  end
end
