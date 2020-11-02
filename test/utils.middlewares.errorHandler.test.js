const {withErrorStack} = require("../utils/middlewares/errorHandler")
const config = require("../config/config")
const assert  = require("assert")
describe("Middleware (withErrorStack)", function(){
    it("config.dev = true" ,function(){
        config.dev = true
        let result = withErrorStack("error", "stack")
        assert.deepStrictEqual(result, {
               error: 'error',
               stack: 'stack'
             })
    })
    it("config.dev = false",function(){
        config.dev = false
        let result = withErrorStack("error", "stack")
        assert.deepStrictEqual(result, "error" )
    })
})