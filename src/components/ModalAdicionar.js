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
      .catch(error => console.error('Erro ao buscar categorias:', error));

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
      })
      .catch(error => {
        console.error('Erro ao salvar projeto:', error);
        setErrorMessage('Ocorreu um erro ao salvar o projeto. Por favor, tente novamente.' + error.message);
      });
  };

  if (!isOpen) return null; // Retorna null se o modal não estiver aberto

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
      <div className="z-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="pb-5 text-xl font-semibold text-center">Adicionar Novo Projeto</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome do Projeto"
            value={nomeProjeto}
            onChange={(e) => setNomeProjeto(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            required
          />
          <textarea
            placeholder="Descrição do Projeto"
            value={descricaoProjeto}
            onChange={(e) => setDescricaoProjeto(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md resize-none"
          ></textarea>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            required
          >
            <option value="">Selecione a Categoria</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>

          <select
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            required
          >
            <option value="">Selecione a Turma</option>
            {turmas.map((turma) => (
              <option key={turma.id} value={turma.id}>
                {turma.nome}
              </option>
            ))}
          </select>
          <button type="submit" className="w-full px-4 py-2 text-white bg-green-500 rounded-md">
            SALVAR
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
