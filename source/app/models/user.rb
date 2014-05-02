class User < ActiveRecord::Base
  has_many :survey_voters
  has_many :surveys, through: :survey_voters
  has_many :surveys


  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end
end
