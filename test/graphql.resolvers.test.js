const should = require('chai').should()
const expect = require('chai').expect

const proxyquire = require("proxyquire")
const connectDbMock= require("../utils/mocks/graphQLquerys")
const { newsMock } = require("../utils/mocks/news")


describe('graphql resolver', function () {
  const resolvers = proxyquire('../graphql/resolvers', {
    './querys': connectDbMock
  })

  describe('It is a object', function () {
    it('resolvers its an object', async function (done) {
      should.exist(resolvers)
      resolvers.should.be.an('object');
      done()
    })

  });
  describe('Resolvers.getNews', function () {
    it('getNews exists', async function (done) {
      resolvers.Query.should.be.an('object');
      done()
    })  
    it('News data', async function (done) {
      
      let search = resolvers.Query.searchNews(null, { keyword:"manchester"  } )
      
      expect(resolvers.Query.getNews()).to.equal(newsMock)
      expect(search).to.equal(newsMock)
      done()
    })  

  });

})
