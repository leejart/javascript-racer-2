class Game < ActiveRecord::Base
  has_many :players
  # Remember to create a migration!
end
