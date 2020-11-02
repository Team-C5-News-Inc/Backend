const sinon = require('sinon')
const {
  filteredByTagsMock,
  newsMock,
  filteredByCategoryMock
} = require('./news')

const query = {
  page: 1,
  tags: { tags: { $in: 'Einstein' } },
  category: { category: 'Política' }
}

const getAllStub = sinon.stub()

getAllStub.withArgs('news').resolves(newsMock)
getAllStub.withArgs('news', { tags: { tags: { $in: 'Einstein' } } }).resolves(filteredByTagsMock('Einstein'))
getAllStub.withArgs('news', { category: 'Política' }).resolves(filteredByCategoryMock('Política'))

const getOneStub = sinon.stub()

getOneStub.withArgs('5f96cf7a4456f902438ee1c0').resolves(newsMock)

class MongoLibMock {
  getAllAggregate (collection, query) {
    return getAllStub(collection, query)
  }

  getNews (collection, _id) {
    return newsMock[0]
  }
}
module.exports = {
  MongoLibMock,
  getAllStub,
  getOneStub
}
