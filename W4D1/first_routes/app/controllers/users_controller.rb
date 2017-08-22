class UsersController < ApplicationController
  def index
    # render plain: "I'm in the index"
    if params[:query]
      @user = User.where('username LIKE ?', "%#{params[:query]}%")

    else
      @user = User.all
    end
    render json: @user
  end

  def create
    # render json: params
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destory
    render json: @user
  end

  private
  def user_params
    params.require(:user).permit(:username)
  end
end
