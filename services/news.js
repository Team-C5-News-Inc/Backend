const mongoLib = require('../lib/mongodb')

class NewsService {
  constructor () {
    this.collection = 'news',
    this.mongoDB = new mongoLib()
  }
  // Asyncronous function getNews call pagination
  async getNews ({ tags, category, page = 1 }) {
    const query = {
      page: parseInt(page),
      tags: tags ? { tags: { $in: tags.split(',') } } : {},
      category: category ? { category: category } : {}
    }

    const news = await this.mongoDB.getAllAggregate(this.collection, query)

    return news || []
  }
  // Asyncronous function call by id
  async getOne (_id) {
    const oneNew = await this.mongoDB.getOne(this.collection, _id)
    return oneNew
  }
}

module.exports = NewsService
