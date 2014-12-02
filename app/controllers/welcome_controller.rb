class WelcomeController < ApplicationController
  layout 'welcome'
  def index
    if user_signed_in?
      redirect_to test
    end
  end

  private

  def test
    if current_user.is_admin?
      admin_feeds_path
    else
      articles_path
    end
  end
end
