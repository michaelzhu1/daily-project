class ArtworksController < ApplicationController

  def create
    @artwork = Artwork.new(artworks_params)
    if @artwork.save
      render json: @artwork
    else
      render @artwork.errors.full_messages, status: 404
    end
  end


  def destroy
    @artwork = Artwork.find(params[:id])
    @artwork.destroy
    render json: @artwork
  end

  def index
    render json: Artwork.all
  end

  def show
    @artwork = Artwork.find(params[:id])
    render json: @artwork
  end

  def update
    @artwork = Artwork.find(params[:id])
    if @artwork.update_attributes(artworks_params)
      render json: @artwork
    else
      render json: @artwork.errors.full_messages,
      status: 404
    end
  end


  private
  def artworks_params
    params.require(:artworks).permit(:title, :image_url, :artist_id)
  end
end
