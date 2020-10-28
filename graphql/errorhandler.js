'use strict'

function errorHandler (error) {
  console.error(error)
  throw new Error('Fail connect unsuccessfully')
}

module.exports = errorHandler
