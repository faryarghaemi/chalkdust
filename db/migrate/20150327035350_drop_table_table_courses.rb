class DropTableTableCourses < ActiveRecord::Migration
  def change
    drop_table :table_courses do |t|
    end
  end
end
