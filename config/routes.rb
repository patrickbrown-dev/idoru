Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'

  get '/reader', to: 'reader#index'

  namespace :api do
    resources :feeds do
      member do
        get :refresh
      end
    end
    resources :articles, only: [:index, :show] do
      collection do
        get :refresh
      end
    end
  end

  namespace :admin do
    resources :users, only: [:index, :show]
    resources :feeds do
      member do
        get :refresh
      end
    end
    resources :articles, only: [:show]
    resources :subscriptions, except: [:show]
  end
end
