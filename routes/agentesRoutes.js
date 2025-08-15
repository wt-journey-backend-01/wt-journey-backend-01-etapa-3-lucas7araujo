const express = require('express')
const router = express.Router();
const agentesController = require('../controllers/agentesController');

router.get('/agentes', agentesController.listar);
router.get('/agentes/:id', agentesController.buscarPorId);

router.post('/agentes', agentesController.criar);

router.put('/agentes/:id', agentesController.atualizar);

router.delete('/agentes/:id', agentesController.deletar);

module.exports = router
