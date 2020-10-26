const { newsMock, filteredByCategoryMock, filteredByTagsMock} = require("./news")


class MongoLibMock {

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        if (err) {
            reject("err");
         }
          resolve();
        })
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
        
       

    })
    .catch(err => {
      return err
    })
  }

  async getOne() {
        return newsMock[0]
  }

}

module.exports = MongoLib;
