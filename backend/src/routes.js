//import module
const express = require('express')
const routes = express.Router();

//import do controller
const UsersController = require('./controllers/UserController');

// Rota Users - acesso no insonmia ou navegador
routes.post('/users', UsersController.create);
routes.get('/users', UsersController.read);
routes.delete('/users/:id', UsersController.delete);

//exporta tudo
module.exports = routes;