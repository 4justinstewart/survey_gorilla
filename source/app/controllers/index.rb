get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/user/:id/new_survey' do
  # @user = User.find_by_id(params[:id])
  erb :new_survey
end

get '/dashboard' do
  @my_surveys = Survey.where(creator_id: 1)
  @all_surveys = Survey.all
  erb :dashboard
end

