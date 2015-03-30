class DropTableTableProjects < ActiveRecord::Migration
  def change
      drop_table :projects do |t|
      end
  end
end
