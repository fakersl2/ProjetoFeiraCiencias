const app = require("../../src/api/server");

//funcao que o vercel vai chamar
module.exports = (req, res) => {
    //convertendo a requisicao e a resposta do express pro vercel
    app(req, res);
};