const assert = require('assert')
const proxyquire = require('proxyquire')
const config = require("../config/config")

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
    
    describe("GET /api/news/:_id", function(){
      it("Get one", function(){
        request.get("/api/news/5f96cf7a4d16f902438ee1c0").end((err, res)=>{
          assert.deepStrictEqual(res.body, {
            message: 'Get news by id', 
            data : newsMock[0]
          })
        })
      })
    })
    describe("Cache", function () {
      config.dev = false 

      request.get("/api/news").end((err, res)=>{
        assert.deepStrictEqual(res.header, {
          'x-powered-by': 'Express',
          'cache-control': 'public, max-age=600',
          'content-type': 'application/json; charset=utf-8',
          'content-length': '1525',
          etag: 'W/"5f5-0gaBzBW4hlQN9aG1vIdy9vJrTFs"',
          date: `${res.header.date}`,
          connection: 'close'
        })
      })     
    })
  }
  
)
// describe("errors - routes - news", function(){
//   const route = require("../routes/news")
//   const request = testServer(route);
//   request.get("/api/news").send({"hola": 2}).end((err, res)=>{
//     console.log(res.status);
//   })) 