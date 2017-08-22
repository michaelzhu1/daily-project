class ArtworkSharesController < ApplicationController

  def create
    @artworkshare = ArtworkShare.new(artwork_share_params)
    if @artworkshare.save
      render json: @artworkshare, status: :created
    else
      render json: @artworkshare.errors.full_messages,
      status: :unprocessable_entity
    end
  end

  def destroy
    @artworkshare = ArtworkShare.find(params[:id])
    @artworkshare.destroy
    render json: @artworkshare
  end

  private

  def artwork_share_params
    params.require(:artwork_share).permit(:artwork_id, :viewer_id)
  end


end
