const express = require('express');
const turmaController = require('../controllers/turmaController');

const router = express.Router();

router.get('/', turmaController.listar);
router.get('/:id', turmaController.buscarPorId);
router.post('/', turmaController.criar);
router.put('/:id', turmaController.atualizar);
router.delete('/:id', turmaController.deletar);

module.exports = router;
