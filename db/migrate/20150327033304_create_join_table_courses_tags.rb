class CreateJoinTableCoursesTags < ActiveRecord::Migration
  def change
    create_join_table :courses, :tags do |t|
      t.string :course_id
      t.string :tag_id
      t.timestamps
    end
  end
end
