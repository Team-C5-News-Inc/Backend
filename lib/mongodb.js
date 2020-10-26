const { MongoClient, ObjectId } = require('mongodb');
const config  = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true ,useUnifiedTopology: true });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err);
         }
          resolve(this.client.db(this.dbName));
        });
      });
    }

    return MongoLib.connection;
  }

  async getAllAggregate(collection, query) {

    let minimumDocunet = 0 
    let maximDocument = 100
   
    if(query){
      minimumDocunet = query.page  > 0? (query.page*100)-100: 1
      maximDocument = query.page > 0? query.page*100: 100
    }


    return this.connect().then(async (db) => {
      let responsedb =await db
        .collection(collection)
        .aggregate([
          /* Pagination */
          {$skip: 0},
          {$limit: 50},
          { 
            //Filter by tags
            $match: query.tags
          },
          { 
            //Filter by category.short_name
            $match: query.category
          },
        ])
        .toArray();

        return responsedb
      
    })
    .catch(err => {
      return err
    })
  };

  async getOne(collection, _id) {
    
    return this.connect().then(async (db) => {
      let responsedb =await db
        .collection(collection)
        .find({"_id": ObjectId(_id)})
        .toArray();
        
        return responsedb
    })
    .catch(err => {
      return err
    })
  };

  async createOne(collection, data){
    return this.connect().then(async (db)=>{
      let insertion = db
        .collection(collection)
        .insertOne(data)
      
      return insertion
    })
    .catch(err=>{
      return err
    })
  }

}

module.exports = MongoLib;
