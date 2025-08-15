const CasosRepository = require('../repositories/casosRepository');

const CasosController = {
  // GET /casos → lista todos os casos com o agente responsável
  async getAllCasos(req, res) {
    try {
      const casos = await CasosRepository.listarComAgente();
      res.json(casos);
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao listar casos' });
    }
  },

  // GET /casos/:id → busca um caso específico
  async getCasosById(req, res) {
    try {
      const { id } = req.params;
      const caso = await CasosRepository.buscarPorId(id);
      if (!caso) return res.status(404).json({ erro: 'Caso não encontrado' });
      res.json(caso);
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao buscar caso' });
    }
  },

  // POST /casos → cria um novo caso
  async createCaso(req, res) {
    try {
      const dados = req.body;
      const novoCaso = await CasosRepository.criar(dados);
      res.status(201).json(novoCaso[0]); // retorna o registro criado
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao criar caso' });
    }
  },

  // PUT /casos/:id → atualiza completamente um caso
  async alteraCaso(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const atualizado = await CasosRepository.atualizar(id, dados);
      if (atualizado.length === 0) return res.status(404).json({ erro: 'Caso não encontrado' });
      res.json(atualizado[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao atualizar caso' });
    }
  },

  // PATCH /casos/:id → atualiza parcialmente um caso
  async alteraCasoParcialmente(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const atualizado = await CasosRepository.atualizar(id, dados);
      if (atualizado.length === 0) return res.status(404).json({ erro: 'Caso não encontrado' });
      res.json(atualizado[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao atualizar caso parcialmente' });
    }
  },

  // DELETE /casos/:id → deleta um caso
  async deletarCaso(req, res) {
    try {
      const { id } = req.params;
      await CasosRepository.deletar(id);
      res.status(204).send();
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao deletar caso' });
    }
  }
};

module.exports = CasosController;
