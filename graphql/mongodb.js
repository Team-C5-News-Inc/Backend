const { MongoClient } = require('mongodb')
const config = require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`
let connect

async function connectDB () {
  if (connect) return connect

  let client
  try {
    client = await MongoClient.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    connect = client.db(DB_NAME)
  } catch (error) {
    console.error('could not connect to db', MONGO_URI, error)
    process.exit(1)
  }

  return connect
}

module.exports = connectDB
