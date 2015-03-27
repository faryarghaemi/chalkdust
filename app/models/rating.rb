# == Schema Information
#
# Table name: ratings
#
#  id         :integer          not null, primary key
#  course_id  :string
#  user_id    :string
#  stars      :string
#  created_at :datetime
#  updated_at :datetime
#

class Rating < ActiveRecord::Base
  belongs_to :course
end
