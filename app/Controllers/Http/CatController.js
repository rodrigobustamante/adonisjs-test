'use strict'
const Cat = use("App/Models/Cat");
/**
 * Resourceful controller for interacting with cats
 */
class CatController {
  /**
   * Show a list of all cats.
   * GET cats
   */
  async index ({ request, response, view }) {
    const cats = await Cat.query().with("breed").fetch()
    response.send({cats});
  }

  /**
   * Render a form to be used for creating a new cat.
   * GET cats/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new cat.
   * POST cats
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single cat.
   * GET cats/:id
   */
  async show ({ params, request, response, view }) {
    const cat = await Cat.find(params.id);
    response.send(cat);
  }

  /**
   * Render a form to update an existing cat.
   * GET cats/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update cat details.
   * PUT or PATCH cats/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a cat with id.
   * DELETE cats/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CatController
