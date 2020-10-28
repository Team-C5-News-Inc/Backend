const express = require('express')
const NewsService = require('../services/news')

const { TEN_MINUTES_IN_SECONDS } = require('../utils/cache/timeCache')
const { cacheResponse } = require('../utils/cache/cacheResponse')

/* Pagination Function */
const pagination = (req, nextOrPrev, page) => {
  let nextOrPrevPage
  if (nextOrPrev === 'next') {
    if (page) {
      nextOrPrevPage = `http://${req.headers.host}/api/news?page=${parseInt(page) + 1}`
    } else {
      nextOrPrevPage = `http://${req.headers.host}/api/news?page=2`
    }
  }
  if (nextOrPrev === 'prev') {
    if (page) {
      nextOrPrevPage = `http://${req.headers.host}/api/news?page=${parseInt(page) - 1}`
    } else {
      nextOrPrevPage = `http://${req.headers.host}/api/news?page=${parseInt(0)}`
    }
  }

  return nextOrPrevPage
}

/* Route news Function */
function newsRoute (app) {
  const router = express.Router()

  const NewsServiceInstance = new NewsService()

  app.use('/api/news', router) // route call from in index

  // Get All
  router.get('/', async (req, res, next) => {
    cacheResponse(res, TEN_MINUTES_IN_SECONDS)
    /* In this define syntax, of query not exist its a object empty */
    const { tags, category, page = 0 } = req.query

    try {
      const serviceResponse = await NewsServiceInstance.getNews({ tags, category, page })

      res.status(200).json({
        info: {
          next_page: pagination(req, 'next', page),
          prev_page: pagination(req, 'prev', page),
          category: category || null,
          tags: tags || null
        },
        data: serviceResponse
      })
    } catch (error) {
      next(error)
    }
  })
  // Get One
  router.get('/:_id', async (req, res, next) => {
    cacheResponse(res, TEN_MINUTES_IN_SECONDS)
    const { _id } = req.params

    try {
      const oneNew = await NewsServiceInstance.getOne(_id)

      res.status(200).json({
        message: 'Get news by id',
        data: oneNew || []
      })
    } catch (error) {
      next(error)
    }
  })
};

module.exports = newsRoute
