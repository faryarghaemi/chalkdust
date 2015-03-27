class Registrations < ActiveRecord::Migration
  def change
    create_table :registrations do |t|
      t.string :user_id
      t.string :course_id
      t.timestamps
    end 
  end
end