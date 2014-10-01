class Admin::ArticlesController < Admin::BaseAdminController
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

end
