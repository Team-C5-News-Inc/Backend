'use strict' 

/* Call libraries */
const express = require('express');
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const swaggerUi = require('swagger-ui-express');

const app = express()

/* Call modules */
const { port } = require('./config/config')
const newsRoute = require('./routes/news')
const resolvers = require('./graphql/resolvers')
const swaggerDoc = require('./swagger.json');

/* Middlewares */
app.use(express.json());

/* Define Graphql schema */
const typeDefs = readFileSync(
    join(__dirname, 'graphql', 'schema.graphql'),'utf-8'
)

const schema = makeExecutableSchema({ typeDefs, resolvers })

/* Routes */
//newsRoute(app) change call by:

app.use('/api/news', newsRoute)

app.use('/search', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/* Validation with Test server */
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