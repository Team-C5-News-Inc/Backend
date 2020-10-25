const MongoLib = require("../../lib/mongodb")

const newMongoLib = new MongoLib()

 
const query = { 
    page: 1,
    tags : {"tags":{ $in: ["Einstein"] }} ,
    category:  {"category.short_name": "CyT" }
};
const collection = "news"


let req = async (done)=>{
    const _id="5f8e8fc4f05362cac140a1f"
    const getOne = await newMongoLib.getOne( )
    console.log(getOne[0]._id);

}
req()

