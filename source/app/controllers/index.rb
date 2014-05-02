get '/' do
  if session[:user_id]
    @user = User.find(session[:user_id])
    redirect to("/user/#{@user.id}")
   else
   erb :index
  end 
end












# get '/signin' do
#   erb :index
# end

# post '/signin' do
#   @user = User.find_by_username(params[:username])
#   if @user && @user.password == params[:password]
#     session[:id] = @user.id
#     redirect to "user/#{@user.id}"
#   else
#     @error = "wrong username or password"
#     erb :index
#   end
# end

# get '/user/:id' do
#   session[:user_id]
#   @user = User.find(session[:user_id])
#   redirect to("/user/#{@user.id}")
# end

get '/user/:id/new_survey' do
  # @user = User.find_by_id(params[:id])
  erb :new_survey
end

get '/dashboard' do
  erb :dashboard
end


