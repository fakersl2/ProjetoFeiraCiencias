// Modal.js
import React from 'react';
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from "react-icons/bs";

function Modal({ isOpen, toggleModal }) {
  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background escuro */}
          <div 
            className="fixed inset-0 bg-black opacity-50" 
            onClick={toggleModal}
          ></div>

          {/* Conteúdo do Modal */}
          <div className="z-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center">Votação</h2>
            <p className="mb-4 text-center">Nome do projeto</p>

            {/* Formulário */}
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Identificação" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" 
                  required
                />
              </div>

              {/* Emoji de votação */}
              <div className="flex justify-center mb-4">
                <button type="button" className="text-green-500 transition hover:scale-150 ease-in-out focus:ring-2 active:shadow rounded-full focus:ring-green-500 hover:ring-1">
                  <BsEmojiSmile />
                </button>
                <button type="button" className="mx-4 text-gray-500 transition hover:scale-150 ease-in-out focus:ring-2 active:shadow rounded-full focus:ring-gray-500 hover:ring-1">
                  <BsEmojiNeutral />
                </button>
                <button type="button" className="text-red-500 transition hover:scale-150 ease-in-out focus:ring-2 active:shadow rounded-full focus:ring-red-500 hover:ring-1">
                  <BsEmojiFrown />
                </button>
              </div>

              {/* Comentário */}
              <div className="mb-4">
                <textarea 
                  placeholder="Comentário (opcional)..." 
                  className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400" 
                  required
                ></textarea>
              </div>

              {/* Botão salvar */}
              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                  onClick={toggleModal} // Fecha o modal ao submeter
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
