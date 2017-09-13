Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api do
    defaults format: :json do
      resources :todos, except:[:new,:edit]
    end
  end


end
