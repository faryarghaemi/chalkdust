class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.string :course_id
      t.string :user_id
      t.string :stars
      t.timestamps 
    end
  end
end
