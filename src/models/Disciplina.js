const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cargaHoraria: { type: Number, required: true }, 
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
  curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Disciplina', DisciplinaSchema);
