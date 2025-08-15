const express = require('express');
const app = express();
app.use(express.json());

const agentesRoutes = require('./routes/agentes');

app.use('/agentes', agentesRoutes);

const casosRoutes = require('./routes/casos');
app.use('/', casosRoutes); // ou '/api' se quiser prefixo

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
