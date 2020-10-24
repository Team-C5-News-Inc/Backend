const express = require("express");
const swaggerUi = require('swagger-ui-express');
const app = express()

const { port } = require("./config/config")

const newsRoute = require("./routes/news")
const swaggerDoc = require('./swagger.json');

/* Middlewares */
app.use(express.json());

/* Routes */
newsRoute(app)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//Validation with Test server
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