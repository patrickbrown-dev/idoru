class Api::ArticlesController < ApplicationController
  before_action :authenticate_user!

  def show
    @article = Article.find(params[:id])
    respond_to do |format|
      format.json { render json: @article }
    end
  end
end
