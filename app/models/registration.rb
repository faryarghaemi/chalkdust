# == Schema Information
#
# Table name: registrations
#
#  id         :integer          not null, primary key
#  user_id    :string
#  course_id  :string
#  created_at :datetime
#  updated_at :datetime
#

class Registration < ActiveRecord::Base
  belongs_to :course
end 
