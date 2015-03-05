class Admin::FeedsController < Admin::BaseAdminController
  def index
    @feeds = Feed.order(:id).all
  end

  def show
    @feed = Feed.find(params[:id])
  end

  def new
    @feed = Feed.new
  end

  def create
    @feed = Feed.create!(feed_params)
    redirect_to admin_feed_path(@feed), flash: { success: "Feed created" }
  rescue ActiveRecord::RecordInvalid => e
    redirect_to(admin_feeds_path,
                flash: { warning: "Error creating feed: #{e}" })
  end

  def edit
    @feed = Feed.find(params[:id])
    @users = User.all.map {|user| [user.email, user.id] }
  end

  def update
    @feed = Feed.find(params[:id])
    @feed.update_attributes!(feed_params)
    @feed.update_meta
    redirect_to admin_feed_path(@feed), flash: { success: "Feed updated" }
  rescue ActiveRecord::RecordInvalid => e
    redirect_to(admin_feed_path(@feed),
                flash: { warning: "Error updating feed: #{e}" })
  end

  def destroy
    feed = Feed.find(params[:id])
    feed.articles.destroy_all
    Feed.destroy(params[:id])
    redirect_to admin_feeds_path, flash: { success: "Feed destroyed" }
  end

  def refresh
    @feed = Feed.find(params[:id])
    @feed.update_feed
    @feed.update_articles
    redirect_to(admin_feed_path(@feed),
                flash: { success: "Feed articles refreshed" })
  end

  private

  def feed_params
    params.require(:feed).permit(:url, :user_id)
  end
end
