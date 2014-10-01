class Admin::FeedsController < Admin::BaseAdminController
  def index
    @feeds = Feed.all
  end

  def new
    @feed = Feed.new
  end

  def create
    @feed = Feed.create(feed_params)
    @feed.update_meta

    redirect_to admin_feeds_path, flash: { success: "Feed created" }
  end

  def edit
    @feed = Feed.find(params[:id])
  end

  def update
    @feed = Feed.find(params[:id])
    @feed.update_attributes!(feed_params)
    @feed.update_meta

    redirect_to admin_feeds_path, flash: { success: "Feed updated" }
  end

  def refresh
    @feed = Feed.find(params[:id])
    @feed.update_articles
    
    redirect_to admin_feeds_path, flash: { success: "Feed articles refreshed" }
  end

  private

  def feed_params
    params.require(:feed).permit(:url)
  end
end
