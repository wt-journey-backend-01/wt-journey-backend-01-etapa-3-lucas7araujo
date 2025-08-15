const express = require('express');
const router = express.Router();
const casosController = require('../controllers/casosController');

// Listar todos os casos
router.get('/casos', casosController.getAllCasos);

// Buscar um caso pelo ID
router.get('/casos/:id', casosController.getCasosById);

// Criar um novo caso
router.post('/casos', casosController.createCaso);

// Atualizar completamente um caso
router.put('/casos/:id', casosController.alteraCaso);

// Atualizar parcialmente um caso
router.patch('/casos/:id', casosController.alteraCasoParcialmente);

// Deletar um caso
router.delete('/casos/:id', casosController.deletarCaso);

module.exports = router;
