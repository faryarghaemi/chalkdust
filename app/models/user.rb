# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  admin                  :boolean          default("false"), not null
#  locked                 :boolean          default("false"), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default("0"), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  created_at             :datetime
#  updated_at             :datetime
#  image                  :string
#  linkedin_id            :text
#  is_instructor          :boolean          default("false")
#  first_name             :string
#  last_name              :string
#  project_one            :string
#  project_two            :string
#  project_three          :string
#  year1                  :string
#  year2                  :string
#  year3                  :string
#  year4                  :string
#  year5                  :string
#  headline1              :string
#  headline2              :string
#  headline3              :string
#  headline4              :string
#  headline5              :string
#  detail1                :string
#  detail2                :string
#  detail3                :string
#  detail4                :string
#  detail5                :string
#  code                   :text
#  state                  :text
#

class User < ActiveRecord::Base
  
# Relations
has_many :courses
has_many :posts
has_many :ratings, through: :courses

  # devise 
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable, :confirmable

  
  # Pagination
  paginates_per 100


  def current_user
    @current_user ||= User.find_by(id: session[:user])
  end

  mount_uploader :image, ImageUploader 
  mount_uploader :project_one, ProjectOneUploader 
  mount_uploader :project_two, ProjectTwoUploader 
  mount_uploader :project_three, ProjectThreeUploader 

  def projects
    [project_one.url, project_two.url, project_three.url].compact
  end

  # Validations
  # :email
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i

  def self.paged(page_number)
    order(admin: :desc, email: :asc).page page_number
  end

  def self.search_and_order(search, page_number)
    if search
      where("email LIKE ?", "%#{search.downcase}%").order(
      admin: :desc, email: :asc
      ).page page_number
    else
      order(admin: :desc, email: :asc).page page_number
    end
  end

  def self.last_signups(count)
    order(created_at: :desc).limit(count).select("id","email","created_at")
  end

  def self.last_signins(count)
    order(last_sign_in_at:
    :desc).limit(count).select("id","email","last_sign_in_at")
  end

  def self.users_count
    where("admin = ? AND locked = ?",false,false).count
  end
end
