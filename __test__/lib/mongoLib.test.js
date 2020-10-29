process.env.NODE_ENV = 'test'

const MongoLib = require('../../lib/mongodb')

const newMongoLib = new MongoLib()

const query = {
  page: 1,
  tags: { tags: { $in: ['Einstein'] } },
  category: { category: 'Política' }
}
const collection = 'news'

describe('Test MongoLib (getAllAggregate and GetOne)', () => {
  test('Get All (this function get by category or tags)', async (done) => {
    const getAll = await newMongoLib.getAllAggregate(collection, query)
    expect(Array.isArray(getAll)).toBe(true)
    done()
  })
})

// describe("Test Fail", ()=>{
//     test("Get All fail", async (done)=>{
//         const getAllError = await newMongoLib.getAllAggregate(12)
//         expect(getAllError.message).toBe(undefined)
//         done()
//     })
//     test("Get One by Id fail", async (done)=>{
//         const getOne = await newMongoLib.getOne(12)
//         expect(getOne).toBe(undefined)
//         done()
//     })
// })
