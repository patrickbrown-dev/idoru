Rails.application.routes.draw do
  root 'welcome#index'
  
  namespace :admin do
    resources :feeds, except: [:show, :destroy] do
      member do
        get :refresh
      end
    end
    resources :articles, except: [:show, :destroy]
  end
end
