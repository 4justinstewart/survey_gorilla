class CreatePossibleAnswers < ActiveRecord::Migration
  def change
    create_table :possible_answers do |t|
      t.string  :answer_option
      t.integer :question_id

      t.timestamps
    end
  end
end
