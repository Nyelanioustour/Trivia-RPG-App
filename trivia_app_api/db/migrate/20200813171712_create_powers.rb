class CreatePowers < ActiveRecord::Migration[6.0]
  def change
    create_table :powers do |t|
      t.string :name
      t.integer :effect

      t.timestamps
    end
  end
end
