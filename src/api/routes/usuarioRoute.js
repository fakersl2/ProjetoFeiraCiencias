const { Router } = require('express');
const usuarioController = require('../controllers/usuarioController.js')

const router = Router();

router 
    .get('/usuarios', usuarioController.buscaTodos)
    .get('/usuarios/:id', usuarioController.buscaPorId)
    .post('/usuarios', usuarioController.cadastrar)
    .post('/usuarios/login', usuarioController.login)

module.exports = router;