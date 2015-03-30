class AddColumnsProjectsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :project_one, :text 
    add_column :users, :project_two, :text 
    add_column :users, :project_three, :text 
  end
end
