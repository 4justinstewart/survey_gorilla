get '/surveys' do # SHOW ALL SURVEYS

end

get '/surveys/new/:id' do # Step 1.) CREATE NEW SURVEY via form
  @user = User.find_by_id(params[:id])
  erb :new_survey
end


# post '/user/:id/survey/id'

post '/surveys/new/:id' do # Step 2.) CREATE NEW SURVEY .create()

end

get '/surveys/:id' do # SHOW A PARTICULAR SURVEY

end

get '/surveys/:id/edit' do # Step 1.) EDIT A SURVEY via form

end

patch '/surveys/:id' do # Step 2.) EDIT A SURVEY .update_attributes()

end

delete '/surveys/:id' do # DELETE A PARTICULAR SURVEY

end

