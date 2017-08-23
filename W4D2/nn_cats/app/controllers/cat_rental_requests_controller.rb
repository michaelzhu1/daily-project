class CatRentalRequestsController < ApplicationController

  def new
    @cat_rental_request = CatRentalRequest.new
    render :new
  end

  # def create 
  #   @cat_rental_request = CatRentalRequest
  # end






end
