// Projetos.js
import React, { useState } from 'react';
import Modal from '../components/modal';
import AddIcon from '../assets/img/addicon.svg';

const Projetos = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container px-4 py-8 mx-auto bg-white">

            <h1 className="text-3xl font-bold text-black dark:text-white">Projetos</h1>
            <div className="flex flex-col gap-8 md:flex-row">
                
                <aside className="w-full pt-8 md:w-3/4">
                    {/* BOTAO DE PESQUISAR */}
                    <form className="flex items-center mx-auto">
                        <label for="default-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <input type="search" id="default-search"
                                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                placeholder="Buscar..." required />
                            <button type="submit"
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                    <div className="pt-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {/* Exemplo de card */}
                            <div className="flex items-center justify-between w-full p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-md">
                                <div>
                                    <h2 className="text-lg font-medium text-gray-800">Jogos</h2>
                                    <div className="space-x-4 text-sm text-gray-500">
                                        <span>Química</span>
                                        <span>2B</span>
                                    </div>
                                </div>
                                <button
                                    onClick={toggleModal}
                                    className="relative flex items-center justify-center w-10 h-10 text-2xl font-bold text-gray-800 transition-all duration-300 ease-in-out rounded-full hover:bg-gray-200 hover:ring-2 hover:ring-gray-400 hover:shadow-lg">
                                    <img src={AddIcon} alt="+" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between w-full p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-md">
                                <div>
                                <h2 className="text-lg font-medium text-gray-800">Jogos</h2>
                                    <div className="space-x-4 text-sm text-gray-500">
                                        <span>Matemática</span>
                                        <span>2B</span>
                                    </div>
                                </div>
                                <button
                                    onClick={toggleModal}
                                    className="relative flex items-center justify-center w-10 h-10 text-2xl font-bold text-gray-800 transition-all duration-300 ease-in-out rounded-full hover:bg-gray-200 hover:ring-2 hover:ring-gray-400 hover:shadow-lg">
                                    <img src={AddIcon} alt="+" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between w-full p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-md">
                                <div>
                                <h2 className="text-lg font-medium text-gray-800">Jogos</h2>
                                    <div className="space-x-4 text-sm text-gray-500">
                                        <span>Matemática</span>
                                        <span>2B</span>
                                    </div>
                                </div>
                                <button
                                    onClick={toggleModal}
                                    className="relative flex items-center justify-center w-10 h-10 text-2xl font-bold text-gray-800 transition-all duration-300 ease-in-out rounded-full hover:bg-gray-200 hover:ring-2 hover:ring-gray-400 hover:shadow-lg">
                                    <img src={AddIcon} alt="+" />
                                </button>
                            </div>
                            
                            <div className="flex items-center justify-between w-full p-4 bg-gray-100 border-2 border-gray-200 border-dashed rounded-lg shadow-md hover:shadow-lg">
                                <div>
                                <h2 className="text-lg font-medium text-gray-800">Adicionar Novo Projeto</h2>
                                    <div className="space-x-4 text-sm text-gray-500">
                                        <span>Disciplinas</span>
                                        <span>Salas</span>
                                    </div>
                                </div>
                                <button
                                    onClick={toggleModal}
                                    className="relative flex items-center justify-center w-10 h-10 text-2xl font-bold text-gray-800 transition-all duration-300 ease-in-out rounded-full hover:bg-gray-200 hover:ring-2 hover:ring-gray-400 hover:shadow-lg">
                                    <img src={AddIcon} alt="+" />
                                </button>
                            </div>
                            {/* Adicione mais cards conforme necessário */}
                        </div>
                    </div>
                </aside>

                {/* Componente de filtro, se necessário */}
                <aside className="w-full pt-8 md:w-1/4">
                    <span>Ordenar por: <select className="ml-2" name="" id="">
                        <option value="a-pra-z">A-Z</option>
                        <option value="z-pra-a">Z-A</option>
                    </select>
                    </span>
                    <div className="mt-4">
                        <h2 className="pl-3 py-1 rounded-md text-2xl text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                            Filtrar por
                            Disciplina</h2>
                    </div>
                    <ul className="p-4 space-y-2">
                        <li className="flex items-center">
                            <input id="portugues" type="checkbox" value="portugues"
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="portugues" className="ml-2 text-sm font-medium text-gray-900">Português</label>
                        </li>
                        <li className="flex items-center">
                            <input id="matematica" type="checkbox" value="matematica"
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="matematica" className="ml-2 text-sm font-medium text-gray-900">Matemática</label>
                        </li>
                        <li className="flex items-center">
                            <input id="quimica" type="checkbox" value="quimica"
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="quimica" className="ml-2 text-sm font-medium text-gray-900">Química</label>
                        </li>
                        <li className="flex items-center">
                            <input id="fisica" type="checkbox" value="fisica"
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="fisica" className="ml-2 text-sm font-medium text-gray-900">Física</label>
                        </li>
                        <li className="flex items-center">
                            <input id="" type="checkbox" value="biologia"
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="biologia" className="ml-2 text-sm font-medium text-gray-900">Biologia</label>
                        </li>
                        <li className="flex items-center">
                            <input id="artes" type="checkbox" value="artes"
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="artes" className="ml-2 text-sm font-medium text-gray-900">Artes</label>
                        </li>
                        <li className="flex items-center">
                            <input id="empreendedorismo" type="checkbox" value="empreendedorismo"
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="empreendedorismo" className="ml-2 text-sm font-medium text-gray-900">Empreendedorismo</label>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <h2 className="pl-3 py-1 rounded-md text-2xl text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                            Filtrar por
                            Turma</h2>
                    </div>
                    <ul className="p-4 space-y-2">

                        <li className="flex items-center">
                            <input id="primeiro-b" type="checkbox" value="primeiro-a"
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="primeiro-a" className="ml-2 text-sm font-medium text-gray-900">1A</label>
                        </li>
                        <li className="flex items-center">
                            <input id="primeiro-b" type="checkbox" value="primeiro-b"
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="primeiro-b" className="ml-2 text-sm font-medium text-gray-900">1B</label>
                        </li>
                        <li className="flex items-center">
                            <input id="primeiro-c" type="checkbox" value="primeiro-c"
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="primeiro-c" className="ml-2 text-sm font-medium text-gray-900">1C</label>
                        </li>
                        <li className="flex items-center">
                            <input id="" type="checkbox" value=""
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="" className="ml-2 text-sm font-medium text-gray-900">2A</label>
                        </li>
                        <li className="flex items-center">
                            <input id="" type="checkbox" value=""
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="" className="ml-2 text-sm font-medium text-gray-900">2B</label>
                        </li>
                        <li className="flex items-center">
                            <input id="..." type="checkbox" value="..."
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="..." className="ml-2 text-sm font-medium text-gray-900">3A</label>
                        </li>

                        <li className="flex items-center">
                            <input id="..." type="checkbox" value="..."
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
                            <label for="..." className="ml-2 text-sm font-medium text-gray-900">3B</label>
                        </li>
                    </ul>
                </aside>
            </div>

            {/* Modal */}
            <Modal isOpen={isOpen} toggleModal={toggleModal} />
        </div>
    );
};

export default Projetos;
