class ReaderController < ApplicationController
  before_action :authenticate_user!

  def index
    @articles = get_articles
  end

  private

  def get_articles
    @feeds = Subscription.feeds_for_user(current_user)
    Feed.update_feeds_concurrently(@feeds)
    Article.where(feed_id: @feeds.map { |f| f.id }).
      paginate(page: params[:page], per_page: 25).
      order(published_at: :desc)
  end
end
