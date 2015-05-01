class ChangeWeekdaysFromDatetimeToText < ActiveRecord::Migration
  def change
    change_column :courses, :weekdays, :text
  end
end
