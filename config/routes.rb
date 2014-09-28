Rails.application.routes.draw do
  root 'welcome#index'

  resources :articles
  resources :feeds
end
