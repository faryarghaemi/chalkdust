class CoursesController < ApplicationController

  def currentuser
    @current_user = User.find(current_user.id)
    respond_to do |format|
      format.json { render json: @current_user }
    end
  end

  def set_content_type  
    headers["Content-Type"] = "image/svg+xml"
  end


  def interactive
    @user = User.where( :id => params["id"])
    @user = @user[0]
    respond_to do |format|  
      format.svg  
    end  
  end

  def lazyline
    # binding.pry
    respond_to do |format|  
      format.svg  
    end
  end 

  def linkedin
    token = env['omniauth.auth']['credentials']['token']
    api = LinkedIn::API.new(token)
 
    my_name = api.profile(fields: ["first-name", "last-name"])

    linkedin = ""
    api.profile(fields: ["skills"]).skills.all.each do |x| 
      linkedin += ( x.skill.name + ',') 
    end 

    user = current_user
    user.linkedin_id = linkedin
    user.first_name = my_name.first_name
    user.last_name = my_name.last_name
    user.save

    # binding.pry

    redirect_to "/users/edit"
  end 

  def allusers
    @users = User.all 
    render :json => @users, :methods => [:projects]
  end 

  def index
    if params[:search]
      @courses = Course.search(params[:search])
      respond_to do |format|
        format.json {render :json => @courses }
      # render :json => @courses
      end 
    else
      @courses = Course.all
      respond_to do |format|
        format.json {render :json => @courses }
      # render :json => @courses
      end
    end
  end

  def show
  end 

  def new 
    @course = Course.new
  end 

  def create
    @course = Course.new(course_params)
    params["weekdays"].each do |weekday|
      @course.weekdays << weekday 
    end
      if @course.save 
        render :json => @course
      end  
  end

  def edit
  end 

  def update
    respond_to do |format|
      if @course.update(course_params)
        format.json { render :show, status: :ok, location: @course }
      else
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @course.destroy
  end

  private 
    def course_params 
      params.require(:course).permit(:name, :description, :start_date, :end_date, :start_time, :end_time, :course_cost, :weekdays, :skill_level, :user_id)
    end 
end
