class CreateSurveyVoters < ActiveRecord::Migration
  def change
    create_table :survey_voters do |t|
      t.integer :user_id
      t.integer :survey_id

      t.timestamps
    end
  end
end
