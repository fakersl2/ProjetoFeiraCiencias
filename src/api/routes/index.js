const usuario = require('./usuarioRoute.js')
const projeto = require('./projetoRoute.js')

module.exports = app =>{
    app.use(
        usuario,
        projeto
    )
};

