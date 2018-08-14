'use strict'

const Model = use('Model')

class Cat extends Model {

  static get visible(){
    return ["id", "name"];
  }

  static get hidden(){
    return ["created_at", "updated_at"];
  }

  breed(){
    return this.belongsTo("App/Models/Breed");
  }

}

module.exports = Cat
