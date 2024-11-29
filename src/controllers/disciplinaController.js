const Disciplina = require('../models/Disciplina');

module.exports = {
  async listar(req, res) {
    try {
      const disciplinas = await Disciplina.find().populate('professor curso');
      res.json(disciplinas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar disciplinas.', error });
    }
  },

  async buscarPorId(req, res) {
    try {
      const disciplina = await Disciplina.findById(req.params.id).populate('professor curso');
      if (!disciplina) return res.status(404).json({ message: 'Disciplina não encontrada.' });
      res.json(disciplina);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar disciplina.', error });
    }
  },

  async criar(req, res) {
    try {
      const disciplina = new Disciplina(req.body);
      await disciplina.save();
      res.status(201).json(disciplina);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar disciplina.', error });
    }
  },

  async atualizar(req, res) {
    try {
      const disciplina = await Disciplina.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!disciplina) return res.status(404).json({ message: 'Disciplina não encontrada.' });
      res.json(disciplina);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar disciplina.', error });
    }
  },

  async deletar(req, res) {
    try {
      const disciplina = await Disciplina.findByIdAndDelete(req.params.id);
      if (!disciplina) return res.status(404).json({ message: 'Disciplina não encontrada.' });
      res.json({ message: 'Disciplina deletada com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar disciplina.', error });
    }
  },
};
