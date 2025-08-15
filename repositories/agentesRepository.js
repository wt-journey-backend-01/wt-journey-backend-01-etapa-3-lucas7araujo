const db = require('../db/db');

const agentesRepository = {

  async listar() {
    return await db('agentes').select('*');
  },

  async buscarPorId(id) {
    return await db('agentes').where({ id }).first();
  },

  async criar(dados) {
    return await db('agentes').insert(dados).returning('*');
  },

  async atualizar(id, dados) {
    return await db('agentes').where({ id }).update(dados).returning('*');
  },

  async deletar(id) {
    return await db('agentes').where({ id }).del();
  }
};

module.exports = agentesRepository;
