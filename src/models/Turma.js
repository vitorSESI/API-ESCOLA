const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sala: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala', required: true },
  curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  alunos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Aluno' }],
  turno: { type: String, enum: ['Manhã', 'Tarde', 'Noite'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Turma', TurmaSchema);
