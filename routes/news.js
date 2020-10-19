const express = require('express');

//const newsSchema = require('../utils/schemas/news');
const newsService = require('../services/news');

function newsApi(app) {
    const router = express.Router();
    app.use('/news', router);

    const newsServices = new newsService();

    //Funcion GET de prueba de base de datos
    router.get('/', async function(req, res, next) {
        const { newsId } = req.query;

        try {
            const news = await newsServices.getnews({newsId});

            res.status(200).json({
                data: news,
                message: 'news listed'
            })
        } catch(error) {
            next(error)
        }
    })
}

module.exports = newsApi;