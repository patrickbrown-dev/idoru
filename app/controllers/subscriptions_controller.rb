class SubscriptionsController < ApplicationController
  before_action :authenticate_user!
  layout "reader"

  def index
    @feed = Feed.new
    @subscriptions = Subscription.where(user: current_user)
  end

  def create
    @feed = Subscription.subscribe_to_url(current_user, feed_params[:url]).feed
    @feed.update_articles
    redirect_to(subscriptions_path,
                flash: { success: "Subscription created" })
  rescue => e
    redirect_to(subscriptions_path,
                flash: { danger: "Error creating subscription." })
  end

  def destroy
    Subscription.destroy(params[:id])
    redirect_to(subscriptions_path,
                flash: { success: "Subscription destroyed" })
  end

  private

  def feed_params
    params.require(:feed).permit(:url)
  end
end
