const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
     nome: {
          type: String,
          required: true,
     },
     idade: {
          type: Number,
          required: true,
     },
     altura: {
          type: Number,
          required: false,
     }
})

module.exports = mongoose.model('Pessoa', PessoaSchema);