const { Router } = require('express');
const projetoController = require('../controllers/projetoController.js')

const router = Router();

router 
    .get('/projetos', projetoController.buscaTodos)
    .get('/projetos/nome/:nome', projetoController.procuraPorNome)
    .get('/categorias/', projetoController.pegaTodasCategorias)
    .get('/categorias/:id', projetoController.procuraCategoriaPorId)
    .get('/categorias/filtro/:id', projetoController.filtrarCategoriaPorId)
    .get('/turmas/', projetoController.pegaTodasTurmas)
    .get('/turmas/:id', projetoController.procuraTurmaPorId)
    .get('/turmas/filtro/:id', projetoController.filtrarTurmaPorId)
    .post('/projetos', projetoController.criaProjeto)
    .post('/categorias', projetoController.criaCategoria)
    .post('/turmas', projetoController.criaTurma)
    .post('/votos/:projeto_id', projetoController.votar)

module.exports = router;