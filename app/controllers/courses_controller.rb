class CoursesController < ApplicationController

  def currentuser
    @current_user = User.find(current_user.id)
    respond_to do |format|
      format.json { render json: @current_user }
    end
  end

  def linkedin 
    @code = params["code"]
    @state = params["state"]


    @token = env['omniauth.auth']['credentials']['token']

    @info = env['omniauth.auth']
    @id = env['omniauth.auth']['uid']


    # linkedin_client = LinkedIn::Client.new(ENV['LINKEDIN_KEY'], ENV['LINKEDIN_SECRET'])

    # omniauth['credentials']['token']
    # omniauth['uid']

    api = LinkedIn::API.new(@token)
    me = api.profile

    my_name = api.profile(fields: ["first-name", "last-name"])

    my_profile = api.profile(fields: ["skills", "educations", "courses", "three-current-positions"])

    my_profile['skills']

    binding.pry

    redirect_to "/users/edit"
  end 



  # def set_content_type  
  #   headers["Content-Type"] = "image/svg+xml"  
  # end


  # def interactive 
  #   respond_to do |format|  
  #     format.svg  
  #   end  
  # end 

 #  def mycourses
 #   @current_user = User.find_by :id => session[:user_id]
 #   @mycourses = @current_user.courses
 #   render :json => @mycourses
 #   binding.pry
 # end

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
