const express = require('express');
const app = express();
const PORT = 3000;

// Importação das rotas
const casosRoutes = require('./routes/casosRoutes');
const agentesRoutes = require('./routes/agentesRoutes');

// Middleware para interpretar JSON
app.use(express.json());

// Uso direto das rotas (sem prefixo extra)
app.use(casosRoutes);
app.use(agentesRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`🚓 Servidor do Departamento de Polícia rodando em http://localhost:${PORT}`);
});
