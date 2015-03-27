class DropTable < ActiveRecord::Migration
  def change 
    drop_table :table_tags_name_timestamps do |t|
    end
  end
end
