class CoursesController < ApplicationController

  def index
    @courses = Course.all
    respond_to do |format|
      format.json {render :json => @courses}
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
      params.require(:course).permit(:name, :description, :start_date, :end_date, :start_time, :end_time, :course_cost, :weekdays, :skill_level)
    end 
end
