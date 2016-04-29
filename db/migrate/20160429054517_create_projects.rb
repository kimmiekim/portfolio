class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :string
      t.string :description
      t.string :string
      t.string :date
      t.string :string

      t.timestamps null: false
    end
  end
end
