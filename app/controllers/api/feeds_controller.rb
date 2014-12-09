class Api::FeedsController < ApplicationController
  before_action :authenticate_user!

  def create
    feed = { url: feed_params[:url],
             user_id: current_user.id }

    @feed = Feed.create_and_update(feed)
    redirect_to "/api/articles.json"
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e }, status: 422
  end

  private

  def feed_params
    params.require(:feed).permit(:url)
  end
end
