'use strict'
const User = use('App/Models/User')

class UserController {
  async login({ auth, request, response }) {
    let res = null
    try {
      res = await auth.attempt('hello@world.com', 'helloworld')
    } catch (e) {
      console.error(e)
    }
    // expect to have the user modal instance here
    return response.json(auth.user)
  }
}

module.exports = UserController
