const request = require('supertest')

beforeAll(() => {
    process.env.NODE_ENV = 'test'
})

describe('just testing', () =>{
    it("return true for truthfull", () => {
        expect(true).toBe(true)
    })
})