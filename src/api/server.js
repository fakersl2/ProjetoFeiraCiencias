const express = require('express'); // Importa o Express
const cors = require('cors'); // Importa o middleware cors
const routes = require('../api/routes/index.js'); // Importa as rotas da aplicação

const app = express(); // Cria uma instância do Express
const port = process.env.PORT || 5000; // Usa a variável de ambiente PORT ou 5000 como padrão

// Configura o middleware CORS
app.use(cors({
    origin: '*' // Permite requisições de qualquer origem
}));

app.use(express.json()); // Middleware para fazer o parsing de JSON no corpo das requisições
routes(app); // Inicializa as rotas

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
