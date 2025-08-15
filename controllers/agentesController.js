const AgentesRepository = require('../repositories/AgentesRepository');

const AgentesController = {
  // GET /agentes
  async listar(req, res) {
    try {
      const agentes = await AgentesRepository.listar();
      res.json(agentes);
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao listar agentes' });
    }
  },

  // GET /agentes/:id
  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const agente = await AgentesRepository.buscarPorId(id);
      if (!agente) return res.status(404).json({ erro: 'Agente não encontrado' });
      res.json(agente);
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao buscar agente' });
    }
  },

  // POST /agentes
  async criar(req, res) {
    try {
      const dados = req.body;
      const novoAgente = await AgentesRepository.criar(dados);
      res.status(201).json(novoAgente[0]); // retorna o primeiro registro criado
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao criar agente' });
    }
  },

  // PUT /agentes/:id
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const atualizado = await AgentesRepository.atualizar(id, dados);
      if (atualizado.length === 0) return res.status(404).json({ erro: 'Agente não encontrado' });
      res.json(atualizado[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao atualizar agente' });
    }
  },

  // DELETE /agentes/:id
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await AgentesRepository.deletar(id);
      res.status(204).send();
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao deletar agente' });
    }
  }
};

module.exports = AgentesController;
