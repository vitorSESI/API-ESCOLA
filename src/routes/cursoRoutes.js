const express = require('express');
const cursoController = require('../controllers/cursoController');

const router = express.Router();

router.get('/', cursoController.listar);
router.get('/:id', cursoController.buscarPorId);
router.post('/', cursoController.criar);
router.put('/:id', cursoController.atualizar);
router.delete('/:id', cursoController.deletar);

module.exports = router;
