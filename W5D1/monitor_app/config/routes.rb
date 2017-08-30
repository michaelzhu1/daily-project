Rails.application.routes.draw do

  resources :users
  resources :goals
  resources :comments
  resources :cheers
  resource :session
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
