const express = require('express');
const TesteController = require('./controllers/TesteController');
const routes = express.Router();


routes.get('/', TesteController.index);
routes.get('/:id', TesteController.show);
routes.post('/', TesteController.store);
routes.put('/:id', TesteController.update);
routes.delete('/:id', TesteController.destroy);


module.exports = routes;