Rails.application.routes.draw do
  resources :feeds

  root 'welcome#index'

  resources :articles
end
