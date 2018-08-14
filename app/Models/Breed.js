'use strict'

const Model = use('Model')

class Breed extends Model {

  cats(){
    return this.hasMany("App/Models/Cat");
  }

}

module.exports = Breed
