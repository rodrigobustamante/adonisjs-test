'use strict'

const Schema = use('Schema')

class CatSchema extends Schema {
  up () {
    this.create('cats', (table) => {
      table.integer('breed_id').unsigned().references('id').inTable('breeds')
      table.string('name', 80).notNullable().unique()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cats')
  }
}

module.exports = CatSchema
