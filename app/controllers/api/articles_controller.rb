class Api::ArticlesController < ApplicationController
  before_action :authenticate_user!

  def index
    @articles = get_articles
    paginate json: @articles
  end

  def refresh
    @articles = get_articles(true)
    paginate json: @articles
  end

  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  private

  def get_articles(refresh = false)
    @feeds = Subscription.feeds_for_user(current_user)
    Feed.update_feeds_concurrently(@feeds) if refresh
    Article.where(feed_id: @feeds.map { |f| f.id }).
      order(published_at: :desc)
  end

  def zip_with_feeds(articles)
    articles.map do |a|
      { title: a.title,
        url: a.url,
        published_at: a.published_at.strftime("published on %m/%d/%Y"),
        feed_url: a.feed.url,
        feed_title: a.feed.title }
    end
  end
end
