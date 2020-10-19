const express = require('express');

//const commentsSchema = require('../utils/schemas/comments');
const commentsService = require('../services/comments');

function commentsApi(app) {
    const router = express.Router();
    app.use('/comments', router);

    const commentsServices = new commentsService();

    //Funcion GET de prueba de base de datos
    router.get('/', async function(req, res, next) {
        const { commentsId } = req.query;

        try {
            const comments = await commentsServices.getcomments({commentsId});

            res.status(200).json({
                data: comments,
                message: 'comments listed'
            })
        } catch(error) {
            next(error)
        }
    })
}

module.exports = commentsApi;