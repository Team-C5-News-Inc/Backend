const sinon = require("sinon")
const {
  filteredByTagsMock,
  newsMock
} = require('./news')


let query= {
  page: 1,
  tags: { tags: { $in: "Einstein" } } ,
  category: { category: "Política" }  
}



let getAllStub= sinon.stub()

getAllStub.withArgs("news").resolves(newsMock)
getAllStub.withArgs("news", {tags: { tags: { $in: "Einstein" } } }).resolves(filteredByTagsMock("Einstein"))





class MongoLibMock {
  getAllAggregate (collection, query) {
   return getAllStub(collection, query) 
  }

}
module.exports = {
  MongoLibMock,
  getAllStub,  
}


