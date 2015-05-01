class AddColumnWeekdaysBackToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :weekdays, :text, array:true, default: []
  end
end
