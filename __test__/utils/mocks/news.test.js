const {
    MongoLibMock,
    filteredByCategoryMock,
    newsMock,
    filteredByTagsMock} = require("../../../utils/mocks/news")

describe("Test Array news mock", ()=>{
    test("test newsMock array",async (done)=>{
        expect(newsMock[0]._id).toBe("5f96cf7a4d16f902438ee1c0")
        expect(Array.isArray(newsMock)).toBe(true)
        
        done()
  
    })
})

