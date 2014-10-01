class Admin::BaseAdminController < ApplicationController
  layout "admin"
  before_action :authenticate_user!
  before_action :assert_admin

  private

  def assert_admin
    unless current_user.is_admin?
      redirect_to root_url
    end
  end
end
