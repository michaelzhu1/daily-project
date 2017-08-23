class Cat < ApplicationRecord

  validates :color, inclusion: {in: %w(black white orange yellow grey), message: "Invalid Color!"}, presence: true
  validates :sex, inclusion: {in: ["M", "F"], message: "Invalid Sex"}, presence: true
  validates :birth_date, :name, presence: true

  def age
    cat_birth = self.birth_date.to_s[0..3].to_i
    current_date = Time.now.to_s[0..3].to_i
    (current_date - cat_birth) == 0 ? 1 : (current_date - cat_birth)
  end

  has_many :cat_rentals,
  primary_key: :id,
  foreign_key: :cat_id,
  class_name: :CatRentalRequest,
  dependent: :destroy


end
