class Survey < ActiveRecord::Base
  belongs_to :creator, class_name: "User"
  has_many   :questions
  has_many   :survey_voters
  has_many   :users, through: :survey_voters
end
