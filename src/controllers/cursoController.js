const Curso = require('../models/Curso');

module.exports = {
  async listar(req, res) {
    try {
      const cursos = await Curso.find().populate('disciplinas');
      res.json(cursos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar cursos.', error });
    }
  },

  async buscarPorId(req, res) {
    try {
      const curso = await Curso.findById(req.params.id).populate('disciplinas');
      if (!curso) return res.status(404).json({ message: 'Curso não encontrado.' });
      res.json(curso);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar curso.', error });
    }
  },

  async criar(req, res) {
    try {
      const curso = new Curso(req.body);
      await curso.save();
      res.status(201).json(curso);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar curso.', error });
    }
  },

  async atualizar(req, res) {
    try {
      const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!curso) return res.status(404).json({ message: 'Curso não encontrado.' });
      res.json(curso);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar curso.', error });
    }
  },

  async deletar(req, res) {
    try {
      const curso = await Curso.findByIdAndDelete(req.params.id);
      if (!curso) return res.status(404).json({ message: 'Curso não encontrado.' });
      res.json({ message: 'Curso deletado com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar curso.', error });
    }
  },
};
