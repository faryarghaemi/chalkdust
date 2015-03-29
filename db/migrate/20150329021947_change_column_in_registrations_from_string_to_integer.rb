class ChangeColumnInRegistrationsFromStringToInteger < ActiveRecord::Migration
  def change
    change_column :registrations, :user_id, 'integer USING CAST(user_id AS integer)'
    change_column :registrations, :course_id, 'integer USING CAST(course_id AS integer)'
  end
end
