class UsersController < ApplicationController


  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to goals_url
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def destroy
  end



  def update
  end

  def edit
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
