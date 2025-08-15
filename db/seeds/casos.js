/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Apaga todos os casos primeiro
  await knex('casos').del();

  // Insere casos (referenciando agentes já criados)
  await knex('casos').insert([
    {
      titulo: 'Roubo no centro',
      descricao: 'Relatos de assalto a mão armada na avenida principal.',
      status: 'aberto',
      agente_id: 1
    },
    {
      titulo: 'Desaparecimento de pessoa',
      descricao: 'Pessoa desapareceu após sair do trabalho.',
      status: 'aberto',
      agente_id: 2
    },
    {
      titulo: 'Investigação de fraude',
      descricao: 'Fraude em licitação pública detectada.',
      status: 'solucionado',
      agente_id: 3
    }
  ]);
};
