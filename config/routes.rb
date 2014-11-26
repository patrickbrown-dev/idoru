Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'

  #get '/reader/', to: 'reader#index'
  #get '/reader/:id', to: 'reader#show', as: 'reader'

  resources :articles, only: [:index, :show]

  namespace :admin do
    resources :users, only: [:index, :show]
    resources :feeds do
      member do
        get :refresh
        get :purge
      end
    end
    resources :articles, only: [:show]
  end
end
