const mongoose = require('mongoose');

const TesteSchema = new mongoose.Schema({
     name: String,
     description: String,
})

module.exports = mongoose.model('Teste', TesteSchema);
