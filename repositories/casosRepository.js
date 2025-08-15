const knex = require('../knexfile'); // caminho pro seu knexfile

const CasosRepository = {
  // Listar todos os casos simples
  async listar() {
    return await knex('casos').select('*');
  },

  // Listar todos os casos com o agente responsável (JOIN)
  async listarComAgente() {
    return await knex('casos as c')
      .join('agentes as a', 'c.agente_id', 'a.id')
      .select(
        'c.id as caso_id',
        'c.titulo',
        'c.descricao',
        'c.status',
        'a.nome as agente_responsavel',
        'a.cargo as cargo_agente'
      );
  },

  // Buscar um caso por ID
  async buscarPorId(id) {
    return await knex('casos').where({ id }).first();
  },

  // Criar um novo caso
  async criar(dados) {
    // dados = { titulo, descricao, status, agente_id }
    return await knex('casos').insert(dados).returning('*');
  },

  // Atualizar um caso existente
  async atualizar(id, dados) {
    return await knex('casos').where({ id }).update(dados).returning('*');
  },

  // Deletar um caso
  async deletar(id) {
    return await knex('casos').where({ id }).del();
  }
};

module.exports = CasosRepository;
