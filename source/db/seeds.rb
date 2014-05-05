require 'faker'

15.times do
  @user = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password_hash: Faker::Lorem.word
  )
  2.times do
    @survey = Survey.create(
      title: Faker::Lorem.sentence,
      category: Faker::Lorem.word,
      creator_id: @user.id
    )

    @survey_voter = SurveyVoter.create(
      user_id: @user.id,
      survey_id: @survey.id
    )

    10.times do
      @question = Question.create(
        question: "#{Faker::Lorem.sentence.gsub('.', '')}?",
        survey_id: @survey.id
      )
      5.times do
        @possible_answer = PossibleAnswer.create(
          answer_option: Faker::Lorem.sentence,
          question_id: @question.id
        )

        Response.create(
          survey_voter_id: @survey_voter.id,
          question_id: @question.id,
          possible_answer_id: @possible_answer.id
        )
      end
    end
  end
end
