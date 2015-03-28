# == Schema Information
#
# Table name: courses
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  user_id     :string
#  start_date  :datetime
#  end_date    :datetime
#  start_time  :datetime
#  end_time    :datetime
#  course_cost :string
#  weekdays    :datetime
#  skill_level :string
#  created_at  :datetime
#  updated_at  :datetime
#

class Course < ActiveRecord::Base
  belongs_to :user
  has_many :registrations
  has_and_belongs_to_many :tags
  has_many :ratings
end
