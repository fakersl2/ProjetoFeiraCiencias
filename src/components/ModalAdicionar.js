/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ModalAdicionar({ isOpen, toggleModal }) {
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [descricaoProjeto, setDescricaoProjeto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [turma, setTurma] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch categorias
    axios.get('http://localhost:5000/categorias')
      .then(response => setCategorias(response.data))
      .catch(error => console.error('Erro ao buscar disciplinas/categorias:', error));

    // Fetch turmas
    axios.get('http://localhost:5000/turmas')
      .then(response => setTurmas(response.data))
      .catch(error => console.error('Erro ao buscar turmas:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const projeto = {
      nome: nomeProjeto,
      descricao: descricaoProjeto,
      categoria: categoria,
      turma: turma,
    };

    axios.post('http://localhost:5000/projetos', projeto)
      .then(response => {
        console.log('Projeto salvo com sucesso:', response.data);
        setNomeProjeto('');
        setDescricaoProjeto('');
        setCategoria('');
        setTurma('');
        setErrorMessage(''); // Limpa a mensagem de erro
        toggleModal();
        window.location.reload(); 
      })
      .catch(error => {
        console.error('Erro ao salvar projeto:', error);
        setErrorMessage('Ocorreu um erro ao salvar o projeto. Por favor, tente novamente.' + error.message);
      });


  };

  if (!isOpen) return null; // Retorna null se o modal não estiver aberto

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
      <div className="z-10 py-8 px-10 bg-white rounded-lg shadow-lg min-w-fit hover:py-10 hover:px-12 transition-all ease-in-out">
        <h2 className="pb-5 text-xl font-semibold text-center cursor-default transition-all hover:scale-105 ease-in-out">Adicionar Novo Projeto</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome do Projeto"
            value={nomeProjeto}
            onChange={(e) => setNomeProjeto(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-green-400 transition-all focus:scale-105"
            required
          />
          <textarea
            placeholder="Descrição do Projeto(opcional)"
            value={descricaoProjeto}
            onChange={(e) => setDescricaoProjeto(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md resize-none focus:ring-green-400 transition-all focus:scale-105"
          ></textarea>
          <div className='flex items-center justify-around group'>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-green-400 transition-all focus:scale-105 focus:mr-1"
              required
            >
              <option value="">Selecione a Disciplina</option>
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nome}
                </option>
              ))}
            </select>
          </div>

          <select
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-green-400 transition-all focus:scale-105"
            required
          >
            <option value="">Selecione a Turma</option>
            {turmas.map((turma) => (
              <option key={turma.id} value={turma.id}>
                {turma.nome}
              </option>
            ))}
          </select>
          <button type="submit" className="w-full px-4 py-2 text-white bg-green-400 rounded-md focus:ring-green-300 transition-all hover:scale-105 ease-in-out hover:bg-green-500 hover:font-semibold">
            Salvar
          </button>
        </form>
        {errorMessage && (
          <p className="mt-4 text-red-500">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default ModalAdicionar;