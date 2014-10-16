Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'

  get '/reader/', to: 'reader#index'
  get '/reader/:id', to: 'reader#show'

  namespace :admin do
    resources :users, only: [:index, :show]
    resources :feeds, except: [:destroy] do
      member do
        get :refresh
        get :purge
      end
    end
    resources :articles, only: [:show]
  end
end
