class Admin::UsersController < Admin::BaseController

  before_action :set_user, only: [
    :show,
    :edit,
    :update,
    :destroy
  ]

  
  def index
    @users = User.search_and_order(params[:search], params[:page])
  end

  def show
    redirect_to edit_admin_user_path(params[:id])
  end

  def edit
  end

  def set_content_type  
    headers["Content-Type"] = "image/svg+xml"  
  end


  def interactive
    # binding.pry
    # @user = @current_user
    @user = User.where( :id => params["id"])
    @user = @user[0]
    respond_to do |format|  
      format.svg  
    end  
  end

  def update
    old_email = @user.email
    new_params = user_params.dup
    new_params[:email] = new_params[:email].strip

    # @user.email = new_params[:email]
    # @user.first_name = new_params[:first_name]
    # @user.last_name = new_params[:last_name]
    # @user.linkedin_id = new_params[:linkedin_id]
    # @user.image = new_params[:image]
    # @user.project_one = new_params[:project_one]
    # @user.project_two = new_params[:project_two]
    # @user.project_three = new_params[:project_three]
    # @user.year1 = new_params[:year1]
    # @user.year2 = new_params[:year2]
    # @user.year3 = new_params[:year3]
    # @user.year4 = new_params[:year4]
    # @user.year5 = new_params[:year5]
    # @user.detail1 = new_params[:detail1]
    # @user.detail2 = new_params[:detail2]
    # @user.detail3 = new_params[:detail3]
    # @user.detail4 = new_params[:detail4]
    # @user.detail5 = new_params[:detail5]
    # @user.headline1 = new_params[:headline1]
    # @user.headline2 = new_params[:headline2]
    # @user.headline3 = new_params[:headline3]
    # @user.headline4 = new_params[:headline4]
    # @user.headline5 = new_params[:headline5]
    # @user.is_instructor = new_params[:is_instructor]

    @user.password = new_params[:password] if new_params[:password].strip.length > 0
    @user.password_confirmation = new_params[:password_confirmation] if new_params[:password_confirmation].strip.length > 0

    @user.update(user_params)
    

    if current_user.id != @user.id
      @user.admin = new_params[:admin]=="0" ? false : true
      @user.locked = new_params[:locked]=="0" ? false : true
      @user.is_instructor = new_params[:is_instructor]=="0" ? false : true
    end

    if @user.valid?
      @user.skip_reconfirmation!
      @user.save
      redirect_to admin_users_path, notice: "Changes updated."
    else
      flash[:alert] = "Changes couldn't be updated."
      render :edit
    end
  end


  private

  def set_user
    @user = User.find(params[:id])
  rescue
    flash[:alert] = "The user with an id of #{params[:id]} doesn't exist."
    redirect_to admin_users_path
  end

  def user_params
    params.require(:user).permit(
    :email, 
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
    :password,
    :password_confirmation,
    :admin,
    :locked, 
    :remote_image_url
    )
  end

end
