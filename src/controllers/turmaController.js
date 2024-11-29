const Turma = require('../models/Turma');

module.exports = {
  async listar(req, res) {
    try {
      const turmas = await Turma.find().populate('sala curso alunos');
      res.json(turmas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar turmas.', error });
    }
  },

  async buscarPorId(req, res) {
    try {
      const turma = await Turma.findById(req.params.id).populate('sala curso alunos');
      if (!turma) return res.status(404).json({ message: 'Turma não encontrada.' });
      res.json(turma);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar turma.', error });
    }
  },

  async criar(req, res) {
    try {
      const turma = new Turma(req.body);
      await turma.save();
      res.status(201).json(turma);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar turma.', error });
    }
  },

  async atualizar(req, res) {
    try {
      const turma = await Turma.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!turma) return res.status(404).json({ message: 'Turma não encontrada.' });
      res.json(turma);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar turma.', error });
    }
  },

  async deletar(req, res) {
    try {
      const turma = await Turma.findByIdAndDelete(req.params.id);
      if (!turma) return res.status(404).json({ message: 'Turma não encontrada.' });
      res.json({ message: 'Turma deletada com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar turma.', error });
    }
  },
};
