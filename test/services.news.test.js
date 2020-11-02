const assert = require('assert')
const proxyquire = require('proxyquire')

const { MongoLibMock, getAllStub, getOneStub } = require('../utils/mocks/mongodbLib')
const { newsMock, filteredByCategoryMock, filteredByTagsMock,  } = require('../utils/mocks/news')

describe('Service - movies', function () {
  const NewsServices = proxyquire('../services/news', {
    '../lib/mongodb': MongoLibMock
  })

  const newsService = new NewsServices()

  describe('When getMovies method is called', async function () {
    it('Should call the getAllAggregate lib mongolib method', async function () {
      await newsService.getNews({})
      assert.strictEqual(getAllStub.called, true)
    })

    it('Should return a array', async function () {
      const result = await newsService.getNews({})
      const expected = newsMock

      assert.strictEqual(result, expected)
    })
    it('Filter by tags-Service', async function () {
      await newsService.getNews("news",{ tags: { tags: { $in: 'Einstein' } } })
      assert.strictEqual(getAllStub.called, true)
    })
    it('Filter by categories- Service', async function () {
      await newsService.getNews("news",{ category: 'Política' })

      assert.strictEqual(getAllStub.called , true )
    })
  })
 
})
  



