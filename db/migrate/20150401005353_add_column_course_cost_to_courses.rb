class AddColumnCourseCostToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :course_cost, :integer
  end
end
