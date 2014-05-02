class Response < ActiveRecord::Base
  belongs_to :survey_voter
  belongs_to  :question
  belongs_to  :possible_answer
end
