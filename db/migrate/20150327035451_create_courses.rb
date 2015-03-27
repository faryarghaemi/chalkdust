class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string   :name
      t.text     :description
      t.string   :user_id
      t.datetime :start_date
      t.datetime :end_date
      t.datetime :start_time
      t.datetime :end_time
      t.string   :course_cost
      t.datetime :weekdays
      t.string   :skill_level
      t.timestamps
    end
  end
end
