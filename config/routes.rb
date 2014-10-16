Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'

  namespace :admin do
    resources :users, only: [:index, :show]
    resources :feeds, except: [:destroy] do
      member do
        get :refresh
        get :purge
      end
    end
    resources :articles, only: [:index, :show]
  end
end
