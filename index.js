const express = require("express");
const cors =require("cors")

const newsRoute = require("./routes/news")
const { port } = require("./config/config")
const {logError, errorHandler} = require("./utils/middlewares/errorHandler")

const app = express()



/* Middlewares execute*/
app.use(express.json());
app.use(cors())

newsRoute(app) 
app.use('/static', express.static(__dirname + '/public'));

app.use(logError)     //Error Handlers
app.use(errorHandler) //Error Handlers


//Where listen the server?
app.listen(port, ()=>{
    console.log(`App listen on ${port}`);
})

module.exports = app;
