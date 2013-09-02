class Player < ActiveRecord::Base
  has_many :games
  validates :email, presence: true, uniqueness: true
  # Remember to create a migration!
end
