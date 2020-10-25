const testServer = require("../utils/testServer")
const route = require("../routes/news")

describe("GET /api/news",  () =>{
    test("GET /api/news", async (done)=> {
 
        const response= await testServer(route).get("/api/news")
        
        expect(response.status).toBe(200)
        expect(response.body.info.category).toBe(null)
        expect(response.body.info.tags).toBe(null)
        
        expect(Array.isArray(response.body.data)).toBe(true)
    
        done()
    })
    test("GET /api/news?category=CyT", async (done)=> {
 
        const response= await testServer(route).get("/api/news?category=CyT")
        
        expect(response.status).toBe(200)
        expect(response.body.info.category).toBe("CyT")
        expect(response.body.info.tags).toBe(null)
        
        expect(Array.isArray(response.body.data)).toBe(true)
    
        done()
    })
    test("GET /api/news?tags=Einstein", async (done)=> {
 
        const response= await testServer(route).get("/api/news?tags=Einstein")
        
        expect(response.status).toBe(200)
        expect(response.body.info.category).toBe(null)
        expect(response.body.info.tags).toBe("Einstein")
        
        expect(Array.isArray(response.body.data)).toBe(true)
    
        done()
    })
    
})