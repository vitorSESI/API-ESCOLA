const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  especialidade: { type: String, required: true },
  disciplinas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina' }],
  matricula: { type: String, unique: true, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Professor', ProfessorSchema);
