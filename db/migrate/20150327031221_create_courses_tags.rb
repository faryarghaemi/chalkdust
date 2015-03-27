class CreateCoursesTags < ActiveRecord::Migration
  def change
    create_table :courses_tags do |t|
      t.string :tag_id
      t.string :course_id
      t.timestamps
    end
  end
end
