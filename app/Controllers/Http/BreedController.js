'use strict'

/**
 * Resourceful controller for interacting with breeds
 */
class BreedController {
  /**
   * Show a list of all breeds.
   * GET breeds
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new breed.
   * GET breeds/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new breed.
   * POST breeds
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single breed.
   * GET breeds/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing breed.
   * GET breeds/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update breed details.
   * PUT or PATCH breeds/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a breed with id.
   * DELETE breeds/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BreedController
