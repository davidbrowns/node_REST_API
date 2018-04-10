const jwt = require('jsonwebtoken')
const ErrorWrapper = require('../../util/ErrorWrapper')
const errorCodes = require('../../config/errorCodes')

/**
 * @return {Promise} true/Error
 */
module.exports.verify = (token, SECRET) => { // TODO test it
  __typecheck(token, 'String', true)
  __typecheck(SECRET, 'String', true)

  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, (error, decoded) => {
      if (error) {
        if (error.name === 'TokenExpiredError') {
          return reject(new ErrorWrapper({ ...errorCodes.TOKEN_EXPIRED }))
        }
        return reject(new Error(error))
      }
      return resolve(decoded)
    })
  })
}

/**
 * @return {Promise} string (token)
 */
module.exports.sign = (playload, SECRET, options) => {
  __typecheck(playload, 'Object', true)
  __typecheck(SECRET, 'String', true)
  __typecheck(options, 'Object', true)

  return new Promise((resolve, reject) => {
    jwt.sign(playload, SECRET, options, (error, token) => {
      if (error) return reject(new ErrorWrapper({ ...errorCodes.TOKEN_NOT_SIGNED }))
      return resolve(token)
    })
  })
}
