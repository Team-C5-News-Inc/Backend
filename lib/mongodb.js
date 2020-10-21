const { MongoClient, ObjectId, ObjectID } = require('mongodb');
const config  = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class mongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true ,useUnifiedTopology: true });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!mongoLib.connection) {
      mongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err);
         }
          resolve(this.client.db(this.dbName));
        });
      });
    }

    return mongoLib.connection;
  }

  async getAllAggregate(collection, query) {
    let minimumDocunet = query.page > 0? (query.page*100)-100: 0
    let maximDocument = query.page > 0? query.page*100: 100


    return this.connect().then(async (db) => {
      let responsedb =await db
        .collection(collection)
        .aggregate([
          { 
            //Filter by tags
            $match: query.tags
          },
          { 
            //Filter by category.short_name
            $match: query.category
          },

          /* Pagination */
          {$skip: minimumDocunet},
          {$limit: maximDocument},


        ])
        .toArray();
        
        return responsedb
    })
    .catch(err => console.log(err))
  }

  async getOne(collection, _id) {
    
    return this.connect().then(async (db) => {
      let responsedb =await db
        .collection(collection)
        .find({"_id": ObjectId(_id)})
        .toArray();
        
        return responsedb
    })
    .catch(err => console.log(err))
  }

}

module.exports = mongoLib;
