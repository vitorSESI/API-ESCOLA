const Professor = require('../models/Professor');

module.exports = {
  async listar(req, res) {
    try {
      const professores = await Professor.find().populate('disciplinas');
      res.json(professores);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar professores.', error });
    }
  },

  async buscarPorId(req, res) {
    try {
      const professor = await Professor.findById(req.params.id).populate('disciplinas');
      if (!professor) return res.status(404).json({ message: 'Professor não encontrado.' });
      res.json(professor);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar professor.', error });
    }
  },

  async criar(req, res) {
    try {
      const professor = new Professor(req.body);
      await professor.save();
      res.status(201).json(professor);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar professor.', error });
    }
  },

  async atualizar(req, res) {
    try {
      const professor = await Professor.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!professor) return res.status(404).json({ message: 'Professor não encontrado.' });
      res.json(professor);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar professor.', error });
    }
  },

  async deletar(req, res) {
    try {
      const professor = await Professor.findByIdAndDelete(req.params.id);
      if (!professor) return res.status(404).json({ message: 'Professor não encontrado.' });
      res.json({ message: 'Professor deletado com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar professor.', error });
    }
  },
};
