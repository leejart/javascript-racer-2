class CreateGames < ActiveRecord::Migration

  def change
    create_table :games do |t|
      t.string :result
      t.string :finish_time

      t.timestamps
    end
  end
end
