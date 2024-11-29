const express = require('express');
const professorController = require('../controllers/professorController');

const router = express.Router();

router.get('/', professorController.listar);
router.get('/:id', professorController.buscarPorId);
router.post('/', professorController.criar);
router.put('/:id', professorController.atualizar);
router.delete('/:id', professorController.deletar);

module.exports = router;
