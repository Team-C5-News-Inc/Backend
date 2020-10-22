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
