// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.seed = async function (knex) {
//   // Apaga todos os registros (ordem importa por causa da FK)
//   await knex('casos').del();
//   await knex('agentes').del();

//   // Insere agentes
//   await knex('agentes').insert([
//     { id: 1, nome: 'João Silva', dataDeIncorporacao: '2020-05-10', cargo: 'Detetive' },
//     { id: 2, nome: 'Maria Oliveira', dataDeIncorporacao: '2018-03-22', cargo: 'Inspetora' },
//     { id: 3, nome: 'Carlos Souza', dataDeIncorporacao: '2022-01-15', cargo: 'Delegado' }
//   ]);

//   // Insere casos
//   await knex('casos').insert([
//     {
//       titulo: 'Roubo no centro',
//       descricao: 'Relatos de assalto a mão armada na avenida principal.',
//       status: 'aberto',
//       agente_id: 1
//     },
//     {
//       titulo: 'Desaparecimento de pessoa',
//       descricao: 'Pessoa desapareceu após sair do trabalho.',
//       status: 'aberto',
//       agente_id: 2
//     },
//     {
//       titulo: 'Investigação de fraude',
//       descricao: 'Fraude em licitação pública detectada.',
//       status: 'solucionado',
//       agente_id: 3
//     }
//   ]);
// };
