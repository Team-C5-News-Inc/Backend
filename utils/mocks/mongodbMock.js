const {
  NewsServiceMock,
  filteredByCategoryMock,
  filteredByTagsMock,
  newsMock
} = require('./news')

class MongoLib {
  async getAllAggregate (collection, query) {
    let response
    if (query.tags && query.tags !== {}) {
      response = await filteredByTagsMock('Einstein')
    } else if (query.categoty !== {}) {
      response = await filteredByCategoryMock('Política')
    } else {
      response = await newsMock
    }
    return response
  }

  async getOne (collection, _id) {
  }
}
module.exports = MongoLib
