const Teste = require('../models/Teste');

module.exports = {
     // mostra post
     async index(req, res) {
          const testes = await Teste.find();
          return res.json(testes);
     },
     // cria post
     async store(req, res) {
          const testes = await Teste.create(req.body);
          return res.json(testes);
     },
     // mostra 1 post pela id
     async show(req, res) {
          const teste = await Teste.findById(req.params.id);
          return res.json(teste);
     },
     // atualiza 1 post pela id
     async update(req, res) {
          const teste = await Teste.findByIdAndUpdate(req.params.id, req.body, { new: true });
          return res.json(teste);
     },
     // deleta 1 post pela id
     async destroy(req, res) {
          await Teste.findByIdAndRemove(req.params.id);
          return res.send();
     }

}
