/* Express and initilize express */
const express = require("express");
const app = express()

/* Middlewares error */
const {logError, errorHandler} = require("./utils/middlewares/errorHandler")

/* Config Variables */
const { port } = require("./config/config")

/* Require routes files */
const newsRoute = require("./routes/news")

/* Server Static */
app.use('/static', express.static(__dirname + '/public'));


/* Middlewares execute*/
app.use(express.json());

newsRoute(app) //Routes

app.use(logError)     //Error Handlers
app.use(errorHandler) //Error Handlers


//Where listen the server?
app.listen(port, ()=>{
    console.log(`App listen on ${port}`);
})

module.exports = app;
