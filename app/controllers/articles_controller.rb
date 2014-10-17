class ArticlesController < ApplicationController
  def index
    @feeds = Feed.where(user_id: current_user)
    @feeds.each { |feed| feed.update_articles }
    @articles = Article
      .where("feed_id in (?)", @feeds.map{ |f| f.id })
      .order(published_at: :desc)
  end

  def show
    @article = Article.find(params[:id])
  end
end
