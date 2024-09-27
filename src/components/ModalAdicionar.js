import React, { useState } from 'react';

function ModalAdicionar({ isOpen, toggleModal, categorias = [] }) {
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [descricaoProjeto, setDescricaoProjeto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [turma, setTurma] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nome: nomeProjeto,
      descricao: descricaoProjeto,
      categoria,
      turma,
    });
    setNomeProjeto('');
    setDescricaoProjeto('');
    setCategoria('');
    setTurma('');
    toggleModal();
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
            {['Português', 'Matemática', 'Química', 'Física', 'Biologia', 'Artes', 'Empreendedorismo'].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
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
            {['1A', '1B', '1C', '2A', '2B', '3A', '3B'].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button type="submit" className="w-full px-4 py-2 text-white bg-green-500 rounded-md">
            SALVAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalAdicionar;
