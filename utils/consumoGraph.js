const {request} = require("graphql-request");

const uri = `https://backend-platzi-news.herokuapp.com/search`


const query = `query{
    searchNews(keyword:"manchester"){
      _id
      title
      subtitle
      body
      images
      category
      tags
      publication_date
      news_url
      host
    }
  }`;

request(uri, query)
    .then(data=>{
        
        console.log(data.searchNews);
    })
    .catch(err=> console.log(err.response.data.searchNews))