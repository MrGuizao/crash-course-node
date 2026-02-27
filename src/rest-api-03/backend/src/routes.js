const express = require('express');
const ComidaController = require('./controllers/ComidaController')
const routes = express.Router();


routes.get('/', ComidaController.index);
routes.get('/show/:id', ComidaController.show);
routes.post('/store', ComidaController.store);
routes.put('/update/:id', ComidaController.update);
routes.delete('/delete/:id', ComidaController.destroy);

module.exports = routes;