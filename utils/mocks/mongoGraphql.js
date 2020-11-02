async function connectDB () {
  let connect

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
