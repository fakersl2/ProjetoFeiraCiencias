import React, { useState } from 'react'; // Importa useState para gerenciar o estado
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/img/logobranca.webp';

const Cadastro = () => {
    const [nome, setNome] = useState(''); // Estado para o código de identificação
    const [senha, setSenha] = useState(''); // Estado para a senha
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://projetofeiraciencias-5.onrender.com/usuarios', {
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
        <div className="flex items-center justify-center min-h-screen mx-2 bg-gray-100 select-none">
            <div className="flex flex-col w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-md md:flex-row">
                <div className="w-full p-8 mt-12 md:w-1/2">
                    <div className="flex justify-center mb-8">
                        {/* Espaço reservado para conteúdo adicional, se necessário */}
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-gray-700 md:text-3xl">Cadastrar</h2>
                    <p className="mb-6 text-sm text-gray-600 md:text-base">Já possui conta? <a href="/login" className="text-green-600 hover:underline">Entrar</a></p>
                    <form onSubmit={handleSubmit} className="bg-white">
                        <div className="mb-6">
                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 md:text-base">Código de identificação:</label>
                            <input
                                type="text" // Tipo alterado para text para um código de identificação
                                id="nome"
                                className="w-full px-4 py-2 leading-tight transition-all bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-green-600 focus:mt-2"
                                placeholder="Este código será seu nome de usuário!"
                                required
                                value={nome} // Vincula o valor do input ao estado
                                onChange={(e) => setNome(e.target.value)} // Atualiza o estado conforme o usuário digita
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="senha" className="block text-sm font-medium text-gray-700 md:text-base">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                className="w-full px-4 py-2 leading-tight transition-all bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-green-600 focus:mt-2"
                                placeholder="Digite sua senha"
                                required
                                value={senha} // Vincula o valor do input ao estado
                                onChange={(e) => setSenha(e.target.value)} // Atualiza o estado conforme o usuário digita
                            />
                        </div>

                        <div className="mb-6">
                            <button type="submit" className="flex items-center justify-center w-full px-4 py-2 text-white transition duration-300 ease-in-out bg-green-500 border-2 border-gray-200 rounded-lg hover:bg-green-600">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
                {/* Espaço para Imagem */}
                <div className="hidden md:block md:w-1/2">
                    <div className="object-cover w-full h-full bg-green-500">
                        <img src={Logo} className='relative mx-auto w- h-2/3 top-1/2 ' style={{ transform: "translateY(-50%)" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
