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

FactoryGirl.define do
  factory :cheer do
    
  end
end
