class ChangeColumnCourseCostToInteger < ActiveRecord::Migration
  def change
    remove_column :courses, :course_cost
  end
end
