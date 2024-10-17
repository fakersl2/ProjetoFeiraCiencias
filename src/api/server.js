const express = require('express');
const cors = require('cors');
const path = require('path'); // Necessário para servir arquivos estáticos
const routes = require('../api/routes/index.js');

const app = express();
const port = process.env.PORT || 5000;

// Configura o middleware CORS
app.use(cors({
    origin: '*' // Permite requisições de qualquer origem
}));

app.use(express.json()); // Middleware para fazer o parsing de JSON no corpo das requisições
routes(app); // Inicializa as rotas

// Serve os arquivos estáticos da build do React
app.use(express.static(path.join(__dirname, '../../pages/build')));

// Rota para qualquer caminho não especificado (React router)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/build', 'index.html'));
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
