class Api::ArticlesController < ApplicationController
  before_action :authenticate_user!

  def index
    @feeds = Feed.where(user_id: current_user)
    @feeds.each { |feed| feed.update_articles }
    @articles = Article
                .where(feed_id: @feeds.map{ |f| f.id })
                .order(published_at: :desc)
                .limit(25)

    respond_to do |format|
      format.json { render json: zip_with_feeds(@articles) }
    end
  end

  def show
    @article = Article.find(params[:id])
    respond_to do |format|
      format.json { render json: @article }
    end
  end

  private

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
