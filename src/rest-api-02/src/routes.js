const express = require('express');
const PessoaController = require('./controllers/PessoaController');
const routes = express.Router();

routes.get('/', PessoaController.index);
routes.get('/:id', PessoaController.show);
routes.post('/', PessoaController.store);
routes.put('/:id', PessoaController.update);
routes.delete('/:id', PessoaController.destroy);

module.exports = routes;