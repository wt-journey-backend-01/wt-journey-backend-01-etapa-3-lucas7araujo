// const express = require('express');

// app.use(express.json());

// const agentesRoutes = require('./routes/agentesRoutes');

// app.use('/agentes', agentesRoutes);

// const casosRoutes = require('./routes/casosRoutes');
// app.use('/', casosRoutes); 
// app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

const express = require('express')
const app = express();
const PORT = 3000;
const casosRoutes = require("./routes/casosRoutes");
const agentesRoutes = require("./routes/agentesRoutes");


app.use(express.json());
app.use(casosRoutes);
app.use(agentesRoutes);


app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em localhost:${PORT}`);
});