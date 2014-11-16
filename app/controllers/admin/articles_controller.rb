class Admin::ArticlesController < Admin::BaseAdminController
  def show
    @article = Article.find(params[:id])
  end
end
