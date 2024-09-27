const database = require('../models')

module.exports = class UsuarioController{
    static async cadastrar(req,res){
        const { nome, senha } = req.body;
        console.log(nome,senha)

        try {
            const usuario = await database.usuarios.findOne({
                where:{
                    nome: nome,
                    senha: senha
                }
            })

            if(!usuario){
                const novoUsuario = await database.usuarios.create({
                    nome:nome,
                    senha:senha
                })
                res.status(200).json(novoUsuario)
            }
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    static async login(req,res){
        const { cod } = req.body;
        try {
            const verificado = await database.usuarios.findOne({
                where:{
                    senha: cod
                }
            })
            if(!verificado){
                throw new Error("erro ao fazer login")
            }
            res.status(200).json(verificado.id)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    static async buscaTodos(req,res){
        try {
            const usuarios = await database.usuarios.findAll();

            res.status(200).json(usuarios)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}