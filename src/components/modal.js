import React, { useState } from 'react';
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from "react-icons/bs";
import axios from 'axios';

function Modal({ isOpen, toggleModal, projectId }) {
  const [codigo, setCodigo] = useState('');
  const [nota, setNota] = useState('');
  const [comentario, setComentario] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para armazenar a mensagem de erro

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    const voto = {
      codigo: codigo,
      nota: nota,
      comentario: comentario,
      usuario_id: userId
    };

    console.log('Project ID:', projectId); // Adicionando log para depuração

    try {
      const response = await axios.post(`http://localhost:5000/votos/${projectId}`, voto, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        console.log('Voto enviado com sucesso!');
        toggleModal();
      } else {
        setErrorMessage('Erro ao enviar voto'); // Definindo a mensagem de erro
      }
    } catch (error) {
      setErrorMessage(`Erro ao enviar voto: ${error.message}`); // Definindo a mensagem de erro
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-black opacity-50" 
            onClick={toggleModal}
          ></div>
          <div className="z-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center">Votação</h2>
            <p className="mb-4 text-center">Nome do projeto</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Identificação" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" 
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-center mb-4">
                <button 
                  type="button" 
                  className="text-green-500 transition hover:scale-150 ease-in-out focus:ring-2 active:shadow rounded-full focus:ring-green-500 hover:ring-1"
                  onClick={() => setNota('bom')}
                >
                  <BsEmojiSmile />
                </button>
                <button 
                  type="button" 
                  className="mx-4 text-gray-500 transition hover:scale-150 ease-in-out focus:ring-2 active:shadow rounded-full focus:ring-gray-500 hover:ring-1"
                  onClick={() => setNota('médio')}
                >
                  <BsEmojiNeutral />
                </button>
                <button 
                  type="button" 
                  className="text-red-500 transition hover:scale-150 ease-in-out focus:ring-2 active:shadow rounded-full focus:ring-red-500 hover:ring-1"
                  onClick={() => setNota('ruim')}
                >
                  <BsEmojiFrown />
                </button>
              </div>
              <div className="mb-4">
                <textarea 
                  placeholder="Comentário (opcional)..." 
                  className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400" 
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                ></textarea>
              </div>
              {errorMessage && (
                <p className="mb-4 text-red-500">{errorMessage}</p> // Exibindo a mensagem de erro
              )}
              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                >
                  SALVAR
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
