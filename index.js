const express = require('express')
const app = express()

const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

/* Libraries for GraphQL  */
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')

const resolvers = require('./graphql/resolvers')
const newsRoute = require('./routes/news')
const { port } = require('./config/config')
const { logError, errorHandler } = require('./utils/middlewares/errorHandler')
const swaggerDoc = require('./swagger.json')

/* Define Graphql schema */
const typeDefs = readFileSync(
  join(__dirname, 'graphql', 'schema.graphql'), 'utf-8'
)

const schema = makeExecutableSchema({ typeDefs, resolvers })

/* Middlewares execute */
app.use(express.json())

app.use(cors())

// app.use('/api/news', )
newsRoute(app)

app.use('/search', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
<<<<<<< HEAD
app.use(logError) // Error Handlers
app.use(errorHandler) // Error Handlers

// Where listen the server?

app.listen(port, () => {
  console.log(`App listen on ${port}`)
})

module.exports = app
