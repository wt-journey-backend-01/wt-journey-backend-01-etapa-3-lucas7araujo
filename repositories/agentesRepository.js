
const agentesRepository = {

  async listar() {
    return await knex('agentes').select('*');
  },

  async buscarPorId(id) {
    return await knex('agentes').where({ id }).first();
  },

  async criar(dados) {
    return await knex('agentes').insert(dados).returning('*');
  },

  async atualizar(id, dados) {
    return await knex('agentes').where({ id }).update(dados).returning('*');
  },

  async deletar(id) {
    return await knex('agentes').where({ id }).del();
  }
};

module.exports = agentesRepository;
