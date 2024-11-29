const Aluno = require('../models/aluno');

module.exports = {
  async listar(req, res) {
    try {
      const alunos = await Aluno.find();
      res.json(alunos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar alunos.', error });
    }
  },

  async criar(req, res) {
    try {
      const aluno = new Aluno(req.body);
      await aluno.save();
      res.status(201).json(aluno);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar aluno.', error });
    }
  },

  async atualizar(req, res) {
    try {
      const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!aluno) return res.status(404).json({ message: 'Aluno não encontrado.' });
      res.json(aluno);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar aluno.', error });
    }
  },

  async deletar(req, res) {
    try {
      const aluno = await Aluno.findByIdAndDelete(req.params.id);
      if (!aluno) return res.status(404).json({ message: 'Aluno não encontrado.' });
      res.json({ message: 'Aluno deletado com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar aluno.', error });
    }
  },
};
