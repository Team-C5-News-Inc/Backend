const sinon = require('sinon')
const {
  filteredByTagsMock,
  newsMock
} = require('./news')

const query = {
  page: 1,
  tags: { tags: { $in: 'Einstein' } },
  category: { category: 'Política' }
}

const getAllStub = sinon.stub()

getAllStub.withArgs('news').resolves(newsMock)
getAllStub.withArgs('news', { tags: { tags: { $in: 'Einstein' } } }).resolves(filteredByTagsMock('Einstein'))

class MongoLibMock {
  getAllAggregate (collection, query) {
    return getAllStub(collection, query)
  }

  getNews () {}
}
module.exports = {
  MongoLibMock,
  getAllStub
}
