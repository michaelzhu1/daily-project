class CreateCheers < ActiveRecord::Migration[5.1]
  def change
    create_table :cheers do |t|
      t.integer :giver_id, null: false
      t.integer :goal_id, null: false

      t.timestamps
    end
    add_index :cheers, :giver_id
    add_index :cheers, %i(goal_id giver_id), unique: true
  end
end
