class AddColumnUsersImageText < ActiveRecord::Migration
  def change 
    add_column :users, :image, :text
    add_column :users, :linkedin_id, :text
    add_column :users, :is_instructor, :boolean, :default => false
  end
end
