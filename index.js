const express = require("express");
const cors =require("cors")
const swaggerUi = require('swagger-ui-express');


const newsRoute = require("./routes/news")
const { port } = require("./config/config")
const {logError, errorHandler} = require("./utils/middlewares/errorHandler")
const swaggerDoc = require('./swagger.json');


const app = express()

/* Middlewares execute*/
app.use(express.json());
app.use(cors())

newsRoute(app) 
app.use('/static', express.static(__dirname + '/public'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(logError)     //Error Handlers
app.use(errorHandler) //Error Handlers


//Where listen the server?

if(process.env_NODE === 'test') {
    app.listen(port, () => {
        console.log(`App is listening to test in ${port}`);
    })
} else {
    app.listen(port, ()=>{
        console.log(`App listen on ${port}`);
    })
}

module.exports = app;
