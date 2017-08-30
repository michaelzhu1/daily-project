# == Schema Information
#
# Table name: goals
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  private    :boolean          default(FALSE), not null
#  details    :text             not null
#  completed  :boolean          default(FALSE), not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Goal < ApplicationRecord

  has_many :cheers_received,
    primary_key: :id,
    foreign_key: :goal_id,
    class_name: :Cheer

end
