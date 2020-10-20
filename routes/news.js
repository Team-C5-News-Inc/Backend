const express = require("express")
const newsService = require("../services/news")


/* Pagination Function */
const pagination= (req, nextOrPrev, page)=> {
    
    let nextOrPrevPage /* = `http://${req.header.host}?page=${parseInt(page)+1}` */;
    if (nextOrPrev === "next") {
        if(page){
            nextOrPrevPage = `http://${req.headers.host}/api/news?page=${parseInt(page)+1}`
        }else {
            nextOrPrevPage = `http://${req.headers.host}/api/news?page=2`
        }         

     } 
     if (nextOrPrev === "prev") {
        if(page){
            nextOrPrevPage = `http://${req.headers.host}/api/news?page=${parseInt(page)-1}`
        }  else {
            nextOrPrevPage = `http://${req.headers.host}/api/news?page=null`
        }
     }

     return nextOrPrevPage
}

/* Route news Function */
function newsRoute(app){
    const router  = express.Router()
    
    const newsServiceInstance = new newsService()

    app.use("/api/news", router)
    //Get All 
    router.get("/",async (req, res, next)=>{
        /* In this define syntax, of query not exist its a object empty */
        let {tags, category , page=0}= req.query
        
        const serviceResponse = await newsServiceInstance.getNews({tags, category, page})

        try {
            res.status(200).json({
                info: {
                    next_page: pagination(req,"next", page) ,
                    prev_page: pagination(req,"prev", page) ,
                    category: category ? category : null ,
                    tags: tags ? tags : null
                },
                data : serviceResponse
            })            
        } catch (error) {
            console.log(error);
            // next(error)
        }
    })
    //Get One
    router.get("/:_id", async (req,res, next)=>{
        const { _id } = req.params;
    
        const oneNew = await newsServiceInstance.getOne(_id)
        
        try {
            res.status(200).json({
                message: "Get one movie by id",
                data: oneNew || [ ]
            })
        } catch (error) {
            // next(error)
            console.log(error);
        }
    })
}

module.exports= newsRoute
