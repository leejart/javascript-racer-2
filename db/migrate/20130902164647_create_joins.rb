class CreateJoins < ActiveRecord::Migration
  def change
    create_table :joins do |t|
      t.belongs_to :player
      t.belongs_to :game
      t.timestamps
    end  
  end
end
