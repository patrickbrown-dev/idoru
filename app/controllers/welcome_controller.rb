class WelcomeController < ApplicationController
  layout 'welcome'

  def index
    if user_signed_in?
      redirect_to reader_path
    end
  end
end
