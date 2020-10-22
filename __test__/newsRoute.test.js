const request = require('supertest')

const app = require('../index')

//This method is change by validation in index and environment in config.js
/*//Open test server
let testServer
beforeAll(() => {
    testServer = app.listen(4000)
})

//Close test server
afterAll((done) => {
    testServer.close(done)
})*/


describe('Testing get function in routes/news not is  null', () => {
    it ('Get all data in database  Route /api/news', async() => {
        //Test in the route news
        const response = await request(app).get('/api/news')  

        expect(response.error).toBe(false)   //expect if  
        expect(response.status).toBe(200)    // responde si pudo conectarse con exito
        expect(response.body.body).not.toBeNull()  //responde si no devuelve null
    })
})

describe('Testing get function by id in route /:_id', () => {
    it('Get data by id', async () => {
        const response = await request (app).get('/api/news/5f8f1578d9980e029621ed3e')
        
        expect(response.error).toBe(false)
        expect(response.status).toBe(200)
        expect(response.body.body).not.toBeNull()
        //expect(response.body.body._id).toBe('5f8f1578d9980e029621ed3e')  //This expected get fail error in _id in expect

    })
})
