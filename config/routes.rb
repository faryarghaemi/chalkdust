Chalkdust::Application.routes.draw do
  root "pages#home"
  get "home", to: "pages#home", as: "home"
  get "inside", to: "pages#inside", as: "inside"
  
  get "posts", to: "pages#posts", as: "posts"
  get "posts/:id", to: "pages#show_post", as: "post"

  
  devise_for :users
  # mine
  get '/currentuser' => 'courses#currentuser'
  get '/allusers' => 'courses#allusers'
  # get '/interactive.svg/:id' => 'admin/users#interactive'
  get '/interactive.svg/:id' => 'courses#interactive'
  get '/lazyline.svg' => 'courses#lazyline'
  get '/auth/linkedin/callback' => 'courses#linkedin'

  resources :charges


  resources :courses do 
    resources :registrations
    resources :ratings
  end

  resources :tags


  namespace :admin do
    root "base#index"
    resources :users
    get "posts/drafts", to: "posts#drafts", as: "posts_drafts"
    get "posts/dashboard", to: "posts#dashboard", as: "posts_dashboard"
    resources :posts
  end

end
