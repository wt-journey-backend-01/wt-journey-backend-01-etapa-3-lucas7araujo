 conteudo = `# INSTRUCTIONS.md

## 1. Instalação e configuração

### Requisitos
- Node.js >= 18
- PostgreSQL (ou Docker com PostgreSQL)
- npm ou yarn

### Passos
1. Clone o repositório:
\`\`\`bash
git clone <seu-repo-url>
cd <nome-do-repo>
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Configure o banco no knexfile.js ou .env:
\`\`\`js
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'sua_senha',
      database: 'policia_db'
    },
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' }
  }
};
\`\`\`

---

## 2. Criar e rodar migrations

\`\`\`bash
# Criar migration
npx knex migrate:make solution_migrations

# Rodar todas as migrations
npx knex migrate:latest
\`\`\`

---

## 3. Popular banco com Seeds

\`\`\`bash
# Criar seed
npx knex seed:make initial_data

# Rodar seeds
npx knex seed:run
\`\`\`

Exemplo de seed para \`casos\`:

\`\`\`js
await knex('casos').insert([
  { titulo: 'Roubo no centro', descricao: 'Relatos de assalto a mão armada na avenida principal.', status: 'aberto', agente_id: 1 },
  { titulo: 'Desaparecimento de pessoa', descricao: 'Pessoa desapareceu após sair do trabalho.', status: 'aberto', agente_id: 2 },
]);
\`\`\`

---

## 4. Rodar servidor Express

\`\`\`bash
# Rodar servidor
node index.js

# Ou com nodemon
npx nodemon index.js
\`\`\`

Servidor padrão: \`http://localhost:3000\`

---

## 5. Rotas disponíveis

### Agentes
| Método | Endpoint           | Descrição                   |
|--------|------------------|----------------------------|
| GET    | /agentes          | Listar todos agentes       |
| GET    | /agentes/:id      | Buscar agente por ID       |
| POST   | /agentes          | Criar novo agente          |
| PUT    | /agentes/:id      | Atualizar agente           |
| DELETE | /agentes/:id      | Deletar agente             |

### Casos
| Método | Endpoint                   | Descrição                   |
|--------|----------------------------|----------------------------|
| GET    | /casos/casos               | Listar todos os casos      |
| GET    | /casos/casos/:id           | Buscar caso por ID         |
| POST   | /casos/casos               | Criar novo caso            |
| PUT    | /casos/casos/:id           | Atualizar caso completo    |
| PATCH  | /casos/casos/:id           | Atualizar caso parcialmente|
| DELETE | /casos/casos/:id           | Deletar caso               |

---

## 6. Testando via terminal

### PostgreSQL (psql)
\`\`\`bash
# Entrar no banco
docker exec -it postgres-database psql -U postgres -d policia_db

# Listar casos
SELECT * FROM casos;

# Inserir caso
INSERT INTO casos (titulo, descricao, status, agente_id)
VALUES ('Roubo na estação','Assalto com refém','aberto',2) RETURNING *;

# Atualizar caso
UPDATE casos SET status='solucionado' WHERE id=1 RETURNING *;

# Deletar caso
DELETE FROM casos WHERE id=1;
\`\`\`

### Usando curl
\`\`\`bash
# Listar casos
curl http://localhost:3000/casos/casos

# Criar caso
curl -X POST http://localhost:3000/casos/casos \
-H "Content-Type: application/json" \
-d '{"titulo":"Roubo no banco","descricao":"Assalto em horário de expediente","status":"aberto","agente_id":2}'

# Atualizar parcialmente
curl -X PATCH http://localhost:3000/casos/casos/1 \
-H "Content-Type: application/json" \
-d '{"status":"solucionado"}'

# Deletar caso
curl -X DELETE http://localhost:3000/casos/casos/1
\`\`\`

---

## 7. Observações
- IDs são gerados automaticamente pelo PostgreSQL. Não envie manualmente \`id\` no payload.  
- Todos os dados são persistentes: permanecem mesmo após reiniciar o servidor.  
- Use \`listarComAgente()\` no repository para ver casos com nome do agente responsável.