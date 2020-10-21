const express = require("express");
const app = express()

const { port } = require("./config/config")

const newsRoute = require("./routes/news")

/* Middlewares */
app.use(express.json());

/* Routes */
newsRoute(app)

app.get("/", (req, res)=>{
    res.send("hols")
})
app.listen(port, ()=>{
    console.log(`App listen on ${port}`);
});

module.exports = app