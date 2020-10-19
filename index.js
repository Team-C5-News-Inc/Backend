const express = require('express');
const socket = require('../../../Diseño Web-Fullstack/Node/Proyecto_chat/server/socket');

const app = express();

const { config } = require('./config/config');

const newsApi = require('./routes/news.js');
const usersApi = require('./routes/users.js');
const commentsApi = require('./routes/comments.js');

app.use(express.json());

newsApi(app);
usersApi(app);
commentsApi(app);

app.listen(config.port, function() {
    console.log(`Ready!!! Listening http://localhost:${config.port}`);
});