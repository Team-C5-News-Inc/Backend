const { getNews, searchNews } = require("../../graphql/querys")
const {newsMock, } =require("./news")


module.exports =  {
  getNews:()=>{
      return newsMock
  },
  searchNews:(root, { keyword})=>{
      let response = newsMock
      
      return response
  }
}
