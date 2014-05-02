class User < ActiveRecord::Base
  has_many :survey_voters
  has_many :surveys, through: :survey_voters
  has_many :surveys
end
