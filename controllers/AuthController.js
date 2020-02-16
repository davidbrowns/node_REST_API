const router = require('express').Router()

const { BaseController } = require('./BaseController')
const actions = require('../actions/auth')
const logger = require('../logger')

class AuthController extends BaseController {
  get router () {
    router.post('/auth/login', this.actionRunner(actions.LoginAction))
    router.post('/auth/logout', this.actionRunner(actions.LogoutAction))
    router.post('/auth/refresh-tokens', this.actionRunner(actions.RefreshTokensAction))

    return router
  }

  async init () {
    logger.debug(`${this.constructor.name} initialized...`)
  }
}

module.exports = { AuthController }
