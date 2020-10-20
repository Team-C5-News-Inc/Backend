const express = require("express");
const app = express()

const { port } = require("./config/config")

const newsRoute = require("./routes/news")

/* Middlewares */
app.use(express.json());

/* Routes */
newsRoute(app)


app.listen(port, ()=>{
    console.log(`App listen on ${port}`);
})

