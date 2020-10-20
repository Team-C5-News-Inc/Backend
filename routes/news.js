const express = require("express")
const dataMock =["data"]

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
     console.log(req);
     return nextOrPrevPage
}

function newsRoute(app){
    const router  = express.Router()
    app.use("/api/news", router)
    //Get All 
    router.get("/",async (req, res, next)=>{
        
        let {tags, category , page }= req.query
        console.log(page);
        try {
            res.status(200).json({
                info: {
                    next_page: pagination(req,"next", page) ,
                    prev_page: pagination(req,"prev", page) ,
                    category: category ? category : null ,
                    tags: tags ? tags : null
                },
                data : dataMock
            })            
        } catch (error) {
            console.log(error);
            // next(error)
        }
    })
    //Get One
    router.get("/:_id", async (req,res, next)=>{
        const { _id } = req.params;
        try {
            res.status(200).res.json({
                message: "Get one movie by id",
                data: dataMock
            })
        } catch (error) {
            // next(error)
            console.log(error);
        }
    })
}

module.exports= newsRoute