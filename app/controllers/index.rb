get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/play' do 
  @player_one = Player.create(params[:user_one])
  @player_two = Player.create(params[:user_two])

  erb :play
end

post '/results' do 
  @winner = params[:winner]
  @loser = params[:loser]
  erb :result
end