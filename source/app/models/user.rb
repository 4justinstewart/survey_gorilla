class User < ActiveRecord::Base
  has_many :survey_voters
  has_many :surveys, through: :survey_voters
  has_many :surveys

  def self.authenticate(email , pw)
    @user = User.find_by_email(email)

    if @user && @user.password == pw
      @user
    else
      false
    end
  #@user.try(authenticate, pw)
  end


  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end


  validates :email, uniqueness: true
end
