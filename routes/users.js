const express = require('express');

//const usersSchema = require('../utils/schemas/users.js');
const usersService = require('../services/users');

function usersApi(app) {
    const router = express.Router();
    app.use('/users', router);

    const usersServices = new usersService();

    //Funcion GET de prueba de base de datos
    router.get('/', async function(req, res, next) {
        const { userId } = req.query;

        try {
            const user = await usersServices.getUsers({ userId });

            res.status(200).json({
                data: user,
                message: 'user listed'
            })
        } catch(error) {
            next(error)
        }
    })
}

module.exports = usersApi;