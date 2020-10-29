const {
  filteredByCategoryMock,
  newsMock,
  filteredByTagsMock
} = require('../../../utils/mocks/news')

describe('Test Array news mock', () => {
  test('test newsMock array', async (done) => {
    expect(newsMock[0]._id).toBe('5f96cf7a4d16f902438ee1c0')
    expect(Array.isArray(newsMock)).toBe(true)
    done()
  })
  test('Filter by Tags Mock', (done) => {
    const result = filteredByTagsMock('Einstein')

    expect(Array.isArray(result)).toBe(true)
    expect(result[0].tags).toContain('Einstein')
    expect(Array.isArray(result[0].tags)).toBe(true)

    done()
  })
  test('Filter by Categories Mock', (done) => {
    const result = filteredByCategoryMock('Deportes')

    expect(result[0].category).toBe('Deportes')
    expect(result.length).toBe(1)
    expect(Array.isArray(result)).toBe(true)
    done()
  })
})
