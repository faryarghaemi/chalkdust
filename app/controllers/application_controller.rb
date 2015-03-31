class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :configure_permitted_parameters, if: :devise_controller?
  before_filter :reject_locked!, if: :devise_controller?


  # Devise permitted params
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(
      :email,
      :password,
      :password_confirmation)
    }
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(
      :email,
      :password,
      :password_confirmation,
      :current_password,
      :first_name, 
      :last_name,
      :project_one,
      :remote_project_one_url,  
      :project_two,
      :remote_project_two_url,  
      :project_three, 
      :remote_project_three_url, 
      :linkedin_id,
      :image, 
      :is_instructor,
      :year1,
      :year2,
      :year3,
      :year4,
      :year5,
      :headline1,
      :headline2,
      :headline3,
      :headline4,
      :headline5,
      :detail1,
      :detail2,
      :detail3,
      :detail4,
      :detail5,  
      :remote_image_url
      )
    }
  end

  # Redirects on successful sign in
  def after_sign_in_path_for(resource)
    inside_path
  end

  # Auto-sign out locked users
  def reject_locked!
    if current_user && current_user.locked?
      sign_out current_user
      user_session = nil
      current_user = nil
      flash[:alert] = "Your account is locked."
      flash[:notice] = nil
      redirect_to root_url
    end
  end
  helper_method :reject_locked!

  # Only permits admin users
  def require_admin!
    authenticate_user!

    if current_user && !current_user.admin?
      redirect_to root_path
    end
  end
  helper_method :require_admin!

end
