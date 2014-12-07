class Api::FeedsController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = current_user
    @feeds = Feed.where(user_id: @user).order(:id).all
    respond_to do |format|
     format.json { render json: @feeds }
    end
  end

  def show
    @feed = Feed.find(params[:id])
    respond_to do |format|
      format.json { render json: [@feed, @feed.articles] }
    end
  end

  # def create
  #   @feed = Feed.create_and_update(feed_params)
  #   redirect_to admin_feed_path(@feed), flash: { success: "Feed created" }
  # rescue ActiveRecord::RecordInvalid => e
  #   redirect_to(admin_feeds_path,
  #               flash: { warning: "Error creating feed: #{e}" })
  # end

  # def update
  #   @feed = Feed.find(params[:id])
  #   @feed.update_attributes!(feed_params)
  #   @feed.update_meta
  #   redirect_to admin_feed_path(@feed), flash: { success: "Feed updated" }
  # rescue ActiveRecord::RecordInvalid => e
  #   redirect_to(admin_feed_path(@feed),
  #               flash: { warning: "Error updating feed: #{e}" })
  # end

  # def destroy
  #   feed = Feed.find(params[:id])
  #   feed.articles.destroy_all
  #   Feed.destroy(params[:id])
  #   redirect_to admin_feeds_path, flash: { success: "Feed destroyed" }
  # end

  # def refresh
  #   @feed = Feed.find(params[:id])
  #   @feed.update_articles(true)
  #   redirect_to(admin_feed_path(@feed),
  #               flash: { success: "Feed articles refreshed" })
  # end

  # private

  # def feed_params
  #   params.require(:feed).permit(:url, :user_id)
  # end
end
