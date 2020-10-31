const connectMongoDb = require('./mongodb')

const errorHandler = require('./errorhandler')

module.exports = {
  getNews: async () => {
    let mongodb
    let news = []

    try {
      mongodb = await connectMongoDb()
      news = await mongodb.collection('news').find().toArray()
    } catch (error) {
      errorHandler(error)
    }

    return news
  },
  searchNews: async (root, { keyword }) => {
    let mongodb
    let items
    let news = []

    try {
      mongodb = await connectMongoDb()

      /* Creted Index if not exist */
      await mongodb.collection('news').createIndex({ title: 'text', subtitle: 'text', body: 'text' })
      /* Creted Index if not exist */

      news = await mongodb.collection('news')
        .find({ $text: { $search: keyword } }
        ).toArray()
      items = [...news]
    } catch (error) {
      errorHandler(error)
    }

    return items
  }
}
