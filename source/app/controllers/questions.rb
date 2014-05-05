enable :sessions

post '/question' do

  @question = Question.create(question: params[:question], survey_id: params[:survey_id].to_i)
  @possibles = params.select { |key, value| key =~ /poss/ }
  @possibles.each do |key, value|
    PossibleAnswer.create(answer_option: value, question_id: @question.id)
  end
end

# {"question"=>"Whats up?", "possibility"=>"down", "possibility-2"=>"dude", "survey_id"=>"9"}

post '/make_survey' do
  p params
  @survey = Survey.create(title: params[:title], category: params[:category], creator_id: session[:user_id])
  "#{@survey.id}"

end
