get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/dashboard' do
  erb :dashboard
end

