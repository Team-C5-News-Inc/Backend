const assert = require('assert')

const {
  NewsServiceMock,
  filteredByTagsMock,
  filteredByCategoryMock,
  newsMock
} = require('../utils/mocks/news')

describe('Test directory /utils/mocks/news', function () {
  describe('Filter by tags', function () {
    it("Filter by Tag 'Einstein'", function () {
      const result = filteredByTagsMock('Einstein')

      assert.deepStrictEqual(Array.isArray(result), true)
      assert.notDeepStrictEqual(Array.isArray(result), false)
      assert.deepStrictEqual(result.length, 1)
    })
  })
  describe('Filter by Category', function () {
    it("Filter by Category 'Economia'", function () {
      const result = filteredByCategoryMock('Economia')

      assert.deepStrictEqual(Array.isArray(result), true)
      assert.notDeepStrictEqual(Array.isArray(result), false)
      assert.deepStrictEqual(result.length, 1)
    })
  })
  describe('Return News mock?', function () {
    it('it is an array and length > 1', function () {
      assert.deepStrictEqual(Array.isArray(newsMock), true)
      assert.deepStrictEqual(newsMock.length > 1, true)
    })
  })
  describe('News Service Mock ', async function () {
    const NewsServiceMockInstance = new NewsServiceMock()

    const query = { tags: 'Einstein', category: 'Politica' }

    assert.deepStrictEqual(await NewsServiceMockInstance.getNews({}), newsMock)
    assert.deepStrictEqual(await NewsServiceMockInstance.getNews({ tags: query.tags }), [newsMock[0]])
    assert.deepStrictEqual(await NewsServiceMockInstance.getNews({ category: query.category }), [newsMock[2]])

    assert.deepStrictEqual(await NewsServiceMockInstance.getOne('5f96cf7a4d16f902438ee1c0'), newsMock[0])
  })
})
