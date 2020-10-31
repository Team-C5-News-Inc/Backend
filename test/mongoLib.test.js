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
