'use strict'
const User = use('App/Models/User')

class UserController {
  async login({ auth, request, response }) {
    let user = null
    let token = null
    try {
      user = await auth.validate('hello@world.com', 'helloworld', true)
      token = await auth.generate(user)
    } catch (e) {
      console.error(e)
    }

    return response.json({
      token,
      user,
    })
  }
}

module.exports = UserController
