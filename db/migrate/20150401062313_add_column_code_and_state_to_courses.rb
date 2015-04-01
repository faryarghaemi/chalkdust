class AddColumnCodeAndStateToCourses < ActiveRecord::Migration
  def change
    add_column :users, :code, :text
    add_column :users, :state, :text    
  end
end
