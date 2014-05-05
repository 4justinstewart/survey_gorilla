enable :sessions

get '/' do
  if session[:user_id]
    @user = User.find(session[:user_id])
    redirect to("/user/#{@user.id}/dashboard")
   else
   erb :index
  end
end


get '/signout' do
  session[:user_id] = nil
  redirect to ('/')
end

post '/signup' do
  # check if password == password_conf
  @user = User.new(params[:user])

  flag = (params[:user][:password] == params[:password_confirmation])

  if flag && @user.save
    session[:user_id] = @user.id
    redirect to("/user/#{@user.id}/dashboard")
  else
    @errors = @user.errors.full_messages
    @errors << "password mismatch muhfucka" unless flag
    erb :index
  end

end

post '/user/:id/dashboard' do
  redirect to ("user/#{params[:id]}/dashboard")
end



get '/user/:id/dashboard' do
  session[:user_id]
  @user = User.find_by_id(session[:user_id])
  @my_surveys = Survey.where(creator_id: @user.id)
  @all_surveys = Survey.all
  @time = Time.now
  erb :dashboard
end

post '/signin' do

  @user = User.authenticate(params[:email], params[:password])
  if @user
    session[:user_id] = @user.id
    redirect ("/user/#{@user.id}/dashboard")
  else
    @errors = ["invalid login credentials"]
    erb :index
  end

end



