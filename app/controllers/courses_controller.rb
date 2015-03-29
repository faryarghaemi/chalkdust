class CoursesController < ApplicationController

  def currentuser
    @current_user = User.find(current_user.id)
    respond_to do |format|
      format.json { render json: @current_user }
    end
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
