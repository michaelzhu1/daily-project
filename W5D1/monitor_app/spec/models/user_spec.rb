# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  cheer_count     :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    User.create!(
      username: "gerald",
      password: "super_secret_password"
    )
  end

  describe "password encryption" do
    it "does not save passwords to the database" do
      User.create!(username: "mary_mack", password: "abcdef")
      user = User.find_by_username("mary_mack")
      expect(user.password).not_to be("abcdef")
    end

    it "encrypts the password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: "mary_mack", password: "abcdef")
    end
  end

  it { should validate_length_of(:password).is_at_least(6)}
  it { should validate_presence_of(:username) }
  it { should validate_uniqueness_of(:username) }
  it { should have_many(:goals) }
  it { should have_many(:cheers_given) }
  it { should have_many(:cheers_received).through(:goals) }
end
