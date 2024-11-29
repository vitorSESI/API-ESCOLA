const mongoose = require('mongoose');

const SalaSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  capacidade: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Sala', SalaSchema);
