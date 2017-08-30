# == Schema Information
#
# Table name: cheers
#
#  id         :integer          not null, primary key
#  giver_id   :integer          not null
#  goal_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cheer < ApplicationRecord

  belongs_to :goal,
  primary_key: :id,
  foreign_key: :goal_id,
  class_name: :Goal
end
