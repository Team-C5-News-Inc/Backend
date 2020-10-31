const assert = require("assert")
const proxyquire = require("proxyquire")

const {  MongoLibMock, getAllStub} = require("../utils/mocks/mongodbLib")
const { newsMock  } = require("../utils/mocks/news")

describe("Service - movies", function (){

    const NewsServices =  proxyquire("../services/news", {
        "../lib/mongodb": MongoLibMock
    })
    
    const newsService= new NewsServices()

    describe("When getMovies method is called", async function (){
        it("Should call the getAllAggregate lib mongolib method", async function () {
            await newsService.getNews({})
            assert.strictEqual(getAllStub.called, true)
            
        })     
        it("Should return a array", async function () {
            const result = await newsService.getNews({})
            const expected = newsMock

            assert.strictEqual(result, expected)
            
        })     
    })
})