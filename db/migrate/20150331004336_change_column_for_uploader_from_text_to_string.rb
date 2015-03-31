class ChangeColumnForUploaderFromTextToString < ActiveRecord::Migration
  def change
    change_column :users, :image, :string
    change_column :users, :project_one, :string
    change_column :users, :project_two, :string
    change_column :users, :project_three, :string
  end
end
