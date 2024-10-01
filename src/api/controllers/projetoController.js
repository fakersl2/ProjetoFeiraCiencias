const database = require("../models");
const {Op} = require('sequelize');

module.exports = class ProjetoController {
  static async buscaTodos(req, res) {
    try {
      const projetos = await database.projetos.findAll();
      res.status(200).json(projetos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  static async criaProjeto(req, res) {
    const { nome, descricao, categoria, turma } = req.body;

    try {
      //PROCURA PROJETO
      const existe = await database.projetos.findOne({
        where: {
          turma_id:turma,
          categoria_id:categoria
        },
      });
      if (existe) {
        throw new Error("projeto ja existe");
      }

      //PROCURA CATEGORIA
      const procuraCategoria = await database.categorias.findOne({
        where: {
          id: categoria,
        },
      });
      if (!procuraCategoria) {
        throw new Error("Nao foi possivel encontrar categoria");
      }
      //PROCURA TURMA
      const procuraTurma = await database.turmas.findOne({
        where: {
          id: turma,
        },
      });
      if (!procuraTurma) {
        throw new Error("Nao foi possivel encontrar turma");
      }

      //CRIA PROJETO
      const projeto = await database.projetos.create({
        nome: nome,
        descricao: descricao,
        turma_id: turma,
        categoria_id:categoria
      });

      //CRIA RELAÇÃO
      const criaRelacao = await database.projetosXcategorias.create({
        projeto_id: projeto.id,
        categoria_id: procuraCategoria.id,
      });
      const criaRelacao2 = await database.projetosXturmas.create({
        projeto_id: projeto.id,
        turma_id: procuraTurma.id,
      });

      res.status(200).json({ projeto, criaRelacao, criaRelacao2 });
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  static async criaCategoria(req, res) {
    const { nome } = req.body;
    try {
      const existe = await database.categorias.findOne({
        where: {
          nome: nome,
        },
      });

      if (!existe) {
        const categoria = await database.categorias.create({
          nome: nome,
        });
        res.status(200).json(categoria);
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  static async criaTurma(req, res){
    const { nome } = req.body;
    try {
      const existe = await database.turmas.findOne({
        where: {
          nome: nome,
        },
      });

      if (!existe) {
        const turma = await database.turmas.create({
          nome: nome,
        });
        res.status(200).json(turma);
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  static async votar(req, res) {
    const { projeto_id } = req.params;
    const { codigo, comentario, nota, usuario_id } = req.body;
    try {
      const jaVotou = await database.avaliacoes.findOne({
        where: {
          codigo: codigo,
          projeto_id: projeto_id,
        },
      });

      if(jaVotou){
        throw new Error("Usuario ja votou")
      }

      const projetoId = parseInt(projeto_id, 10)

      const novoVoto = await database.avaliacoes.create({
        codigo: codigo,
        comentario: comentario,
        nota: nota,
        projeto_id: projetoId,
        usuario_id: usuario_id
      })

      res.status(200).json(novoVoto)
    } catch (error) {
      console.log(error.message)
      res.status(400).json(error.message);
    }
  }

  static async procuraPorNome(req,res){
    const { nome } = req.params
    try {
        const regex = new RegExp(nome, "i");
    const projeto = await database.projetos.findAll({
        where:{
            nome:{
                [Op.like]: `%${regex.source}%`,
            },
        },
    });

    if(!projeto){
        throw new Error('Nao foi possivel encontrar um projeto com esse nome')
    }

    res.status(200).json(projeto)
    } catch (error) {
        res.status(400).json(error.message)
    }
  }

  static async procuraCategoriaPorId(req,res){
    const { id } = req.params;
    try {
      const categoria = await database.categorias.findByPk(id);

      res.status(200).json(categoria)
    } catch (error) {
      res.status(400).json(error.message)
    }
  }
  static async procuraTurmaPorId(req,res){
    const { id } = req.params;
    try {
      const turma = await database.turmas.findByPk(id);

      res.status(200).json(turma)
    } catch (error) {
      res.status(400).json(error.message)
    }
  }

  static async pegaTodasCategorias(req,res){
    try {
      const categorias = await database.categorias.findAll();

      res.status(200).json(categorias)
    } catch (error) {
      res.status(400).json(error.message)
    }
  }
  static async pegaTodasTurmas(req,res){
    try {
      const turmas = await database.turmas.findAll();

      res.status(200).json(turmas)
    } catch (error) {
      res.status(400).json(error.message)
    }
  }
};
