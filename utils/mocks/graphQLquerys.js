const { getNews, searchNews } = require('../../graphql/querys')
const { newsMock } = require('./news')

module.exports = {
  getNews: () => {
    return newsMock
  },
  searchNews: (root, { keyword }) => {
    const response = newsMock

    return response
  }
}
