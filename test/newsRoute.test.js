const assert = require("assert")
const proxyquire = require("proxyquire")

const {NewsServiceMock, newsMock} =require("../utils/mocks/news")
const testServer = require('../utils/testServer')

describe("routes - news", function () {
  
  const route = proxyquire('../routes/news', {
    '../services/news': NewsServiceMock
  })
  const request = testServer(route) 

  describe("GET /api/news", function () {
    it("should response with status 200", function(done){
      request.get('/api/news').expect(200, done) 
    })
    it("should respond with the list news", function (){
      request.get("/api/news").end((err, res)=>{
        assert.deepEqual(res.body)
      })
    }) 
  })
})




// describe('GET /api/news', () => {
//   test('GET /api/news', async (done) => {
//     const response = await testServer(route).get('/api/news')

//     expect(response.status).toBe(200)
//     expect(response.body.info.category).toBe(null)
//     expect(response.body.info.tags).toBe(null)

//     expect(Array.isArray(response.body.data)).toBe(true)

//     done()
//   })
//   test('GET /api/news?category=CyT', async (done) => {
//     const response = await testServer(route).get('/api/news?category=CyT')

//     expect(response.status).toBe(200)
//     expect(response.body.info.category).toBe('CyT')
//     expect(response.body.info.tags).toBe(null)

//     expect(Array.isArray(response.body.data)).toBe(true)

//     done()
//   })
//   test('GET /api/news?tags=Einstein', async (done) => {
//     const response = await testServer(route).get('/api/news?tags=Einstein')

//     expect(response.status).toBe(200)
//     expect(response.body.info.category).toBe(null)
//     expect(response.body.info.tags).toBe('Einstein')

//     expect(Array.isArray(response.body.data)).toBe(true)

//     done()
//   })
// })

/* 
process.env.NODE_ENV = 'test'

const MongoLib = require('../lib/mongodb')

const newMongoLib = new MongoLib()

const query = {
  page: 1,
  tags: { tags: { $in: ['Einstein'] } },
  category: { 'category.short_name': 'CyT' }
}
const collection = 'news'

describe('Test MongoLib (getAllAggregate and GetOne)', () => {
  test('Get All (this function get by category or tags)', async (done) => {
    const getAll = await newMongoLib.getAllAggregate(collection, query)
    expect(Array.isArray(getAll)).toBe(true)
    done()
  })
  test('Get One by Id', async (done) => {
    const _id = '5f8e8fc4f05362cac140a1fa'
    const getOne = await newMongoLib.getOne(collection, _id)
    expect(Array.isArray(getOne)).toBe(true)
    done()
  })
})

describe('Test Fail', () => {
  test('Get All fail', async (done) => {
    const getAllError = await newMongoLib.getAllAggregate(12)
    expect(getAllError.message).toBe('collection name must be a String')
    done()
  })
  test('Get One by Id fail', async (done) => {
    const getOneError = await newMongoLib.getOne(12)
    expect(getOneError.message).toBe('collection name must be a String')
    done()
  })
})


*/