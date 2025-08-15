const express = require('express');
const app = express();
app.use(express.json());

const agentesRoutes = require('./routes/agentesRoutes');

app.use('/agentes', agentesRoutes);

const casosRoutes = require('./routes/casosRoutes');
app.use('/', casosRoutes); // ou '/api' se quiser prefixo

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
