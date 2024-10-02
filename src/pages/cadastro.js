import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cadastro = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const nome = event.target.email.value;
        const senha = event.target.password.value;

        try {
            const response = await axios.post('http://localhost:5000/usuarios', {
                nome,
                senha
            });

            if (response.status === 200) {
                navigate('/login');
            } else {
                // Tratar erro
                console.error('Erro ao cadastrar');
            }
        } catch (error) {
            // Tratar erro
            console.error('Erro ao cadastrar', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 select-none">
            <div className="flex flex-col w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-md md:flex-row">
                <div className="w-full p-8 md:w-1/2">
                    <div className="flex justify-center mb-8">
                        {/* Espaço para Imagem */}
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-gray-700 md:text-3xl">Cadastrar</h2>
                    <p className="mb-6 text-sm text-gray-600 md:text-base">Já possui conta? <a href="/login" className="text-green-600 hover:underline">Entrar</a></p>

                    <form onSubmit={handleSubmit} className="bg-white">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 md:text-base">E-mail:</label>
                            <input type="email" id="email" className="w-full px-4 py-2 leading-tight bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-green-600" placeholder="exemplo@exemplo.com" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 md:text-base">Senha:</label>
                            <input type="password" id="password" className="w-full px-4 py-2 leading-tight bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-green-600" placeholder="**********" required />
                        </div>

                        <div className="mb-6">
                            <button type="submit" className="flex items-center justify-center w-full px-4 py-2 text-white bg-green-500 border-2 border-gray-200 rounded-lg hover:bg-green-600 transition ease-in-out duration-300">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>

                <div className="hidden md:block md:w-1/2">
                    <div className="object-cover w-full h-full bg-green-500">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
