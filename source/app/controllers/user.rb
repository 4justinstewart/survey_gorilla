get '/users' do # SHOW ALL USERS

end

get '/users/new' do # Step 1.) CREATE NEW USER via form

end

post '/users' do # Step 2.) CREATE NEW USER .create()

end

get '/users/:id' do # SHOW A PARTICULAR USER

end

get '/users/:id/edit' do # Step 1.) EDIT A USER via form

end

patch '/users/:id' do # Step 2.) EDIT A USER .update_attributes()

end

delete '/users/:id' do # DELETE A PARTICULAR USER

end
