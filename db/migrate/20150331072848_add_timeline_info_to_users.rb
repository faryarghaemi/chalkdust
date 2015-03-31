class AddTimelineInfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :year1, :string
    add_column :users, :year2, :string
    add_column :users, :year3, :string
    add_column :users, :year4, :string
    add_column :users, :year5, :string
    add_column :users, :headline1, :string
    add_column :users, :headline2, :string
    add_column :users, :headline3, :string
    add_column :users, :headline4, :string
    add_column :users, :headline5, :string
    add_column :users, :detail1, :string
    add_column :users, :detail2, :string
    add_column :users, :detail3, :string
    add_column :users, :detail4, :string
    add_column :users, :detail5, :string
  end
end
