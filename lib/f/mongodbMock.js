const {
  NewsServiceMock,
  filteredByCategoryMock,
  filteredByTagsMock,
  newsMock
} = require('../../utils/mocks/news')

class MongoLib {
  async getAllAggregate (collection, query) {
    let response
    // if(query==undefined){

    // }
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
