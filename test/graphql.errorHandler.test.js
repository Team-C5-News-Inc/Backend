const assert = require('assert')

const errorHanadler = require('../graphql/errorhandler')

describe('Error Handler GraphQl test', function () {
  it('Test succes functions', function () {
    const error = errorHanadler('Error')

    assert.match(error, /Fail/i)
  })
})
