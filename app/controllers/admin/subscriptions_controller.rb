class Admin::SubscriptionsController < Admin::BaseAdminController
  def index
    @subscriptions = Subscription.order(:id).all
  end

  def new
    @subscription = Subscription.new
    @users = User.all.map { |user| [user.email, user.id] }
    @feeds = Feed.all.map { |feed| [feed.url, feed.id] }
  end

  def create
    @subscription = Subscription.create(subscription_params)
    redirect_to(admin_subscriptions_path,
                flash: { success: "Subscription created" })
  rescue ActiveRecord::RecordInvalid => e
    redirect_to(admin_feeds_path,
                flash: { warning: "Error creating feed: #{e}" })
  end

  def edit
    @subscription = Subscription.find(params[:id])
    @users = User.all.map { |user| [user.email, user.id] }
    @feeds = Feed.all.map { |feed| [feed.url, feed.id] }
  end

  def update
    @subscription = Subscription.find(params[:id])
    @subscription.update_attributes!(subscription_params)
    redirect_to(admin_subscriptions_path,
                flash: { success: "Subscription updated" })
  rescue ActiveRecord::RecordInvalid => e
    redirect_to(admin_feed_path(@feed),
                flash: { warning: "Error updating feed: #{e}" })
  end

  def destroy
    Subscription.destroy(params[:id])
    redirect_to(admin_subscriptions_path,
                flash: { success: "Subscription destroyed" })
  end

  private

  def subscription_params
    params.require(:subscription).permit(:feed_id, :user_id)
  end
end
