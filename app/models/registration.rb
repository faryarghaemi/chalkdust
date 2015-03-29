# == Schema Information
#
# Table name: registrations
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  course_id  :integer
#  created_at :datetime
#  updated_at :datetime
#

class Registration < ActiveRecord::Base
  belongs_to :course
end 
