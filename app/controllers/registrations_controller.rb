class RegistrationsController < ApplicationController

  def index
    @registrations = Registration.all
    respond_to do |format|
      format.json {render :json => @registrations }
    end
  end

  def show
  end 

  def new 
    @registration = Registration.new
  end 

  def create 
    @registration = Registration.create(registration_params)
      if @registration.save 
        render :json => @registration 
      end  
  end


  def edit
  end 

  def update
    respond_to do |format|
      if @registration.update(registration_params)
        format.json { render :show, status: :ok, location: @registration }
      else
        format.json { render json: @registration.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @registration.destroy
  end

  private 
    def registration_params 
      params.require(:registration).permit(:user_id, :course_id)
    end 

end 