const assert  = require("assert")
const proxyquire = require("proxyquire")

const testServer =require("../utils/testServer")

const {NewsServiceMock , filteredByCategoryMock, filteredByTagsMock, newsMock } = require("../utils/mocks/news")
    
describe("Test /api/news route", function(){
    const route = proxyquire("../routes/news", {
        '../services/news': NewsServiceMock
    })  
    const request = testServer(route)

    it("GET /api/news, this should return status 200", function(done)   {
        request.get("/api/news").expect(200, done)
    })

    it("", function(done){
        request.get("/api/movies").end((err, res)=>{
            assert.deepEqual(res.body, {
                info: {
                    "next_page": "http://localhost:3000/api/news?page=2",
                    "prev_page": "http://localhost:3000/api/news?page=null",
                    "category": null,
                    "tags": null
                  },

                data: newsMock

            })
            done()
        })
    })
    

})
