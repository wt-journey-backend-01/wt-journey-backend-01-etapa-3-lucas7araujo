const db = require('../db/db'); 

const CasosRepository = {

  async listar() {
    return await db('casos').select('*');
  },

  async listarComAgente() {
    return await db('casos as c')
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

  async buscarPorId(id) {
    return await db('casos').where({ id }).first();
  },

  async criar(dados) {
    return await db('casos').insert(dados).returning('*');
  },

  async atualizar(id, dados) {
    return await db('casos').where({ id }).update(dados).returning('*');
  },

  
  async deletar(id) {
    return await db('casos').where({ id }).del();
  }
};

module.exports = CasosRepository;
