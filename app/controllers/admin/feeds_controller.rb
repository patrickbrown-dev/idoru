class Admin::FeedsController < Admin::BaseAdminController
  def index
    @feeds = Feed.order(:id).all
  end

  def show
    @feed = Feed.find(params[:id])
  end

  def new
    @feed = Feed.new
    @users = User.all.map {|user| [user.email, user.id] }
  end

  def create
    @feed = Feed.create(feed_params)
    @feed.update_meta

    redirect_to admin_feed_path(@feed), flash: { success: "Feed created" }
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
  end

  def refresh
    @feed = Feed.find(params[:id])
    @feed.update_articles

    redirect_to admin_feed_path(@feed), flash: { success: "Feed articles refreshed" }
  end

  def purge
    @feed = Feed.find(params[:id])
    @feed.purge

    redirect_to admin_feed_path(@feed), flash: { success: "Feed articles purged" }
  end

  private

  def feed_params
    params.require(:feed).permit(:url, :user_id)
  end
end
