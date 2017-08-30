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

class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :session_token, :password_digest, :cheer_count, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :goals,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Goal

  has_many :cheers_given,
    primary_key: :id,
    foreign_key: :giver_id,
    class_name: :Cheer

  has_many :cheers_received,
    through: :goals,
    source: :cheers_received

  attr_reader :password
  after_initialize :ensure_session_token, :ensure_cheers_count

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    session[:session_token] = nil
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_cheers_count
    self.cheer_count ||= 0
  end


end
