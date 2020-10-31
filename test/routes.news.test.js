const assert = require('assert')
const proxyquire = require('proxyquire')

const { NewsServiceMock, newsMock } = require('../utils/mocks/news')
const testServer = require('../utils/testServer')

describe('routes - news', function () {
  const route = proxyquire('../routes/news', {
    '../services/news': NewsServiceMock
  })
  const request = testServer(route)

  describe('GET /api/news', function () {
    it('should response with status 200', function (done) {
      request.get('/api/news').expect(200, done)
    })

    it('should respond with the list news', function (done) {
      request.get('/api/news').end((err, res) => {
        assert.deepEqual(res.body, {
          info: {
            next_page: 'http://backend-platzi-news.herokuapp.com/api/news?page=2',
            prev_page: 'http://backend-platzi-news.herokuapp.com/api/news?page=0',
            category: null,
            tags: null
          },
          data: newsMock
        })
        done()
      })
    })
    it('should respond with the list news', function (done) {
      request.get('/api/news?page=3').end((err, res) => {
        assert.deepEqual(res.body, {
          info: {
            next_page: 'http://backend-platzi-news.herokuapp.com/api/news?page=4',
            prev_page: 'http://backend-platzi-news.herokuapp.com/api/news?page=2',
            category: null,
            tags: null
          },
          data: newsMock
        })
        done()
      })
    })
    it('should respond with the list news', function (done) {
      request.get('/api/news?pagw').end((err, res) => {
        assert.deepEqual(res.body, {
          info: {
            next_page: 'http://backend-platzi-news.herokuapp.com/api/news?page=2',
            prev_page: 'http://backend-platzi-news.herokuapp.com/api/news?page=0',
            category: null,
            tags: null
          },
          data: newsMock
        })
        done()
      })
    })
  })
})
