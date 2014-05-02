class SurveyVoter < ActiveRecord::Base
  has_many   :responses
  belongs_to :user
  belongs_to :survey
end
