class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer  :survey_voter_id
      t.integer  :question_id
      t.integer  :possible_answer_id

      t.timestamps
    end
  end
end
