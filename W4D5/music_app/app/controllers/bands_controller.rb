class BandsController < ApplicationController
  def new
    @band = Band.new
    render :new
  end

  def create
    @band
  end

  def edit
    @band = Band.find(params[:id])
    render :edit 
  end

  def update

  end

  def index
    @bands = Band.all
    render :index
  end

  def show
    @band = Band.find(params[:id])
    render :show
  end

  def destroy
  end
end
