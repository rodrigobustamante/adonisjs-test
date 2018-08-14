'use strict'

const Schema = use('Schema')

class BreedSchema extends Schema {
  up () {
    this.create('breeds', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('breeds')
  }
}

module.exports = BreedSchema
