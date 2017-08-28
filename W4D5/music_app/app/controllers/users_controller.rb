class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to new_session_url
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find_by(id: params[:id])
    render :edit
  end

  def show
    render :show
  end

  def new
    @user = User.new
    render :new
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
