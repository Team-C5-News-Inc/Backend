const { request } = require("graphql-request")

const reqUri= `https://backend-platzi-news.herokuapp.com/search`

const query = `query {
                searchNews(keyword:"manchester"){
                  title
                  tags
                  author
                  host
                }
              }
  
`


request(reqUri, query).then(async data=>{
    let response = await data
    console.log(response.searchNews);
}).catch(err=> console.log("err"))