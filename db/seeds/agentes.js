/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Apaga todos os agentes primeiro
  await knex('agentes').del();

  // Insere agentes
  await knex('agentes').insert([
    { id: 1, nome: 'João Silva', dataDeIncorporacao: '2020-05-10', cargo: 'Detetive' },
    { id: 2, nome: 'Maria Oliveira', dataDeIncorporacao: '2018-03-22', cargo: 'Inspetora' },
    { id: 3, nome: 'Carlos Souza', dataDeIncorporacao: '2022-01-15', cargo: 'Delegado' }
  ]);
};
