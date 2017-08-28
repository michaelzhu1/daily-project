class SessionsController < ApplicationController
  def create
    @user = User.find_by_creditials(params[:user][:username], params[:user][:password])
    @user.reset_session_token!
    if @user
      login(@user)
      redirect_to user_url
    else
      flash[:error] = ["Invalid Email or Password"]
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end

  def new
    render :new
  end
end
