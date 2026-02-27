const Pessoa = require('../models/Pessoa');

module.exports = {
     async index(req, res) {
          const pessoas = await Pessoa.find(req.body);
          return res.json(pessoas);
     },
     async show(req, res) {
          const pessoas = await Pessoa.findById(req.params.id);
          return res.json(pessoas);
     },
     async store(req, res, next) {
          try {
               const pessoas = await Pessoa.create(req.body);
               return res.json(pessoas);
          }
          catch (err) {
               next(err);
          }
     },
     async update(req, res) {
          const pessoas = await Pessoa.findOneAndUpdate(req.params.id, req.body, { new: true });
          return res.json(pessoas);
     },
     async destroy(req, res) {
          await Pessoa.findOneAndRemove(req.params.id);
          return res.send();
     },
}
