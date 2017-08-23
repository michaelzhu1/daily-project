class CatsController < ApplicationController

  def index
    # @cats = Cat.all
    # render :index
    @cats = if params[:id]
              Cat.where(id: params[:id])
            else
              Cat.all
            end
    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end

  def new
    @cat = Cat.new
    render :new
  end

  def create
    @cat = Cat.new(cat_params)
    if @cat.save
      redirect_to cats_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :new
    end
  end

  def edit
    @cat = Cat.find(params[:id])
    render :edit
  end

  def update
    @cat = Cat.find(params[:id])
    if @cat.update_attributes!(cat_params)
      redirect_to cats_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :edit
    end
  end


  private

  def cat_params
    params.require(:cat).permit(:name, :sex, :birth_date, :color, :description)
  end



end
