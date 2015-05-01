class ChangeColumnWeekdaysToArray < ActiveRecord::Migration
  def change
    remove_column :courses, :weekdays
  end
end
