const data = require("./data")
const MongoLib = require("../../lib/mongodb")

const collection = "news"

const libMongo = new MongoLib()
 
let schema  = `{
    title: [],
    subtitle: [],
    body: [],
    images: [],
    category_long: [],
    tags: [],
    author: [],
    publication_date: [],
    categories:[],
    news_url: "string",
    host: "string",
}`
let recorreData=async ()=>{
    
    for(i=0; i <data.length ; i++){
        if(data[i].title[0] && data[i].body[0] ){
            
            let dataParaInsertar = {
                title: data[i].title[0],
                subtitle: data[i].subtitle[0] ,
                body: data[i].body,
                images: data[i].images ,
                category: data[i].categories[1]? data[i].categories[1]: data[i].category_long ,
                tags: data[i].tags[0]? data[i].tags: data[i].categories,
                author: data[i].author[0] ,
                publication_date: data[i].publication_date[0] ,
                news_url:  data[i].news_url ,
                host: data[i].host ,
            } 

            libMongo.createOne(collection,dataParaInsertar ) 
            console.log(i);
        }
    }
}

    // for (let index = 0; index < data.length; index++) {
    //     console.log(data[index].categories[1]);
        
    // }

recorreData()