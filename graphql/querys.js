const connectMongoDb = require('./mongodb')
// const { ObjectID } = require('mongodb')

module.exports = {
  getNews: async () => {
    let mongodb
    let news = []

    try {
      mongodb = await connectMongoDb()
      news = await mongodb.collection('news').find().toArray()
    } catch (error) {
      console.error('error no entra a try')
    }

    return news
  },
  searchNews: async (root, { keyword }) => {
    let mongodb
    let items
    let news = []

    try {
      mongodb = await connectMongoDb()
      news = await mongodb.collection('news')
        .find({ $text: { $search: keyword } }
        ).toArray()
      items = [...news]
    } catch (error) {
      console.error('error no entra al try')
    }

    return items
  }
}
