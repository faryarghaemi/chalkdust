class ChangeColumnUserIdFromStringToInteger < ActiveRecord::Migration
  def change
    change_column :courses, :user_id, 'integer USING CAST(user_id AS integer)'
  end
end
