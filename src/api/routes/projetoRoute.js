const { Router } = require('express');
const projetoController = require('../controllers/projetoController.js')

const router = Router();

router 
    .get('/projetos', projetoController.buscaTodos)
    .get('/projetos/:nome', projetoController.procuraPorNome)
    .post('/projetos', projetoController.criaProjeto)
    .post('/categorias', projetoController.criaCategoria)
    .post('/turmas', projetoController.criaTurma)
    .post('/votos/:projeto_id', projetoController.votar)

module.exports = router;