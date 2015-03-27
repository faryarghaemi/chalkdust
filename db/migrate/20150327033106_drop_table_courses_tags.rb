class DropTableCoursesTags < ActiveRecord::Migration
  def change
    drop_table :courses_tags do |t|
    end
  end
end
