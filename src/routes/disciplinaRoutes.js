const express = require('express');
const disciplinaController = require('../controllers/disciplinaController');

const router = express.Router();

router.get('/', disciplinaController.listar);
router.get('/:id', disciplinaController.buscarPorId);
router.post('/', disciplinaController.criar);
router.put('/:id', disciplinaController.atualizar);
router.delete('/:id', disciplinaController.deletar);

module.exports = router;
