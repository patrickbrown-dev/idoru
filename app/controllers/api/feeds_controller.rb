class Api::FeedsController < ApplicationController
  before_action :authenticate_user!

  def create
    @feed = Subscription.subscribe_to_url(current_user, feed_params[:url]).feed
    redirect_to "/api/articles.json"
  rescue => e
    render json: { errors: e }, status: 422
  end

  def top
    @feeds = Feed.top
    render json: @feeds
  end

  private

  def feed_params
    params.require(:feed).permit(:url)
  end
end
