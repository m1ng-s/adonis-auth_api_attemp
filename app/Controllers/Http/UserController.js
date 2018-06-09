'use strict'
const User = use('App/Models/User')
const Factory = use('Factory')

class UserController {
  async get({ auth, request, response }) {
    const fakeUser = await Factory
      .model('App/Models/User')
      .create()
    await fakeUser.generate(fakeUser)

  }
}

module.exports = UserController
