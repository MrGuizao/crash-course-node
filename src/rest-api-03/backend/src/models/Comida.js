const mongoose = require('mongoose');
const ComidaSchema = new mongoose.Schema({
     nome: String,
     preco: Number
});

module.exports = mongoose.model('Comida', ComidaSchema);