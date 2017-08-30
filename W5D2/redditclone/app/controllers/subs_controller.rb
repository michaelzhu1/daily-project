class SubsController < ApplicationController
  before_action :require_sign_in, except: [:index, :show]
  before_action :require_user_owns_sub!, only: [:edit, :update]


  def new
    @sub = Sub.new
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.moderator_id = current_user.id
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash[:errors]= @sub.errors.full_messages
      render :new
    end
  end

  def index
    @subs = Sub.all
  end

  def edit
    @sub = Sub.find(params[:id])
  end

  def update
    @sub = Sub.find(params[:id])
    if @sub.update(sub_params)
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :edit
    end
  end

  def show

    @sub = Sub.find(params[:id])
  end

  private

  def require_user_owns_sub!
    unless current_user.subs.find_by(id: params[:id])
      flash[:errors] = ['You can not edit other people\' Sub!']
      redirect_to subs_url
    end
  end


  def sub_params
    params.require(:sub).permit(:name, :description)
  end
end
