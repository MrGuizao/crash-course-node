const Comida = require('../models/Comida');

module.exports = {
     async index(req, res) {
          const comidas = await Comida.find(req.body);
          return res.json(comidas);
     },
     async show(req, res) {
          const comidas = await Comida.findById(req.params.id);
          return res.json(comidas);
     },
     async store(req, res) {
          const comidas = await Comida.create(req.body);
          return res.json(comidas);
     },
     async update(req, res) {
          const comidas = await Comida.findOneAndUpdate(req.params.id, req.body, { new: true });
          return res.json(comidas);
     },
     async destroy(req, res) {
          await Comida.findOneAndRemove(req.params.id);
          return res.send({ Message: "Comida deletada." });
     }
}