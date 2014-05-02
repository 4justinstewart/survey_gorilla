post '/signin' do
  user = User.find_by_email(params[:email])

  if user && user.authenticate(params[:password])
    session[:user_id] = user.id
    redirect to("/user/#{user.id}") #get '/user/:id' route
  else
    @errors = {:Invalid=>["Incorrect Login"]}
    redirect to('/')
  end
end

get '/signin' do
  erb :"signin_form"
end

get '/user/signout' do
  session[:user_id] = nil
  redirect to('/')
end

# CREATE routes -------------------------------------------------

# SIGN UP: New User 
get '/user/signup' do
  redirect to('/') if current_user?
  erb :"new_user"
end

post '/user/new' do
  user = User.new(params[:user])
  if user.save
    session[:user_id] = user.id
    redirect to("/user/#{user.id}") #get '/user/:id' route
  else
    @errors = user.errors.messages
    erb :"new_user"
  end
end

# READ routes ---------------------------------------------------

# user homepage
get '/user/:id' do
  @user = User.find(session[:user_id])
  @user_surveys = Survey.all.where(user_id: session[:user_id])
  redirect to("/") if @user.id != params[:id].to_i
  erb :"user_views/show"
end
