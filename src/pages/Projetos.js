import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/modal";
import AddIcon from "../assets/img/addicon.svg";
import ModalAdicionar from "../components/ModalAdicionar";

function Projetos({ listaProjetos }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [projetos, setProjetos] = useState([]);
  const [turmas, setTurmas] = useState({});
  const [categorias, setCategorias] = useState({});

  const toggleModal = (projectId = null) => {
    console.log("Toggling modal for project ID:", projectId); // Adicione este log
    setSelectedProjectId(projectId);
    setIsOpen(!isOpen);
  };

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const fetchTurmaNome = async (turmaId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/turmas/${turmaId}`
      );
      return response.data.nome;
    } catch (error) {
      console.error("Erro ao buscar turma:", error);
      return null;
    }
  };
  const fetchCategoriaNome = async (categoriaId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/categorias/${categoriaId}`
      );
      return response.data.nome;
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projetos");
        const userId = localStorage.getItem("userId");
        console.log("UserID: ", userId);
        const projetosData = response.data;

        // Buscar nomes das turmas
        const turmasData = {};
        for (const projeto of projetosData) {
          if (projeto.turma_id) {
            const turmaNome = await fetchTurmaNome(projeto.turma_id);
            turmasData[projeto.turma_id] = turmaNome;
          }
        }
        // Buscar nomes das categorias
        const categoriasData = {};
        for (const projeto of projetosData) {
          if (projeto.categoria_id) {
            const categoriaNome = await fetchCategoriaNome(projeto.categoria_id);
            categoriasData[projeto.categoria_id] = categoriaNome;
          }
        }

        setProjetos(projetosData);
        setTurmas(turmasData);
        setCategorias(categoriasData)
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };

    fetchProjetos();
  }, []);

  return (
    <div className="container px-4 py-8 mx-auto bg-white">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        Projetos
      </h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="w-full pt-8 md:w-3/4">
          {/* BOTAO DE PESQUISAR */}
          <form className="flex items-center mx-auto">
            <label htmlFor="default-search" className="sr-only">
              Pesquisar
            </label>
            <div className="relative w-full">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Buscar..."
                required
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center px-4 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className="pt-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {projetos.map((projeto, index) => (
                <div
                  key={projeto.id}
                  className="flex items-center justify-between w-full p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-md"
                >
                  <div>
                    <h2 className="text-lg font-medium text-gray-800">
                      <a
                        href={`/projeto/${projeto.id}`}
                        className="cursor-pointer"
                      >
                        {projeto.nome}
                      </a>
                    </h2>
                    <div className="space-x-4 text-sm text-gray-500">
                      <span>{categorias[projeto.categoria_id]}</span>
                      <span>{turmas[projeto.turma_id]}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleModal(projeto.id)}
                    className="relative flex items-center justify-center w-10 h-10 text-2xl font-bold text-gray-800 transition-all duration-300 ease-in-out rounded-full hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              ))}

              <Modal
                isOpen={isOpen}
                toggleModal={toggleModal}
                projectId={selectedProjectId}
              />
              <ModalAdicionar
                isOpen={isAddModalOpen}
                toggleModal={toggleAddModal}
              />
              {/* CARD3 */}
              <div className="flex items-center justify-between w-full p-4 bg-gray-100 border-2 border-gray-200 border-dashed rounded-lg shadow-md hover:shadow-lg">
                <div>
                  <h2 className="text-lg font-medium text-gray-800">
                    Adicionar Novo Projeto
                  </h2>
                  <div className="space-x-4 text-sm text-gray-500">
                    <span>Disciplinas</span>
                    <span>Salas</span>
                  </div>
                </div>
                <button
                  onClick={toggleAddModal}
                  className="relative flex items-center justify-center w-10 h-10 text-2xl font-bold text-gray-800 transition-all duration-300 ease-in-out rounded-full hover:bg-gray-200 hover:ring-2 hover:ring-gray-400 hover:shadow-lg"
                  aria-label="Adicionar Novo Projeto"
                >
                  <img src={AddIcon} alt="Adicionar" />
                </button>
              </div>
            </div>

            {/* Adicione mais cards conforme necessário */}
          </div>
        </aside>

        {/* Componente de filtro, se necessário */}
        <aside className="w-full pt-8 md:w-1/4">
          <span>
            Ordenar por:{" "}
            <select className="ml-2" name="" id="">
              <option value="a-pra-z">A-Z</option>
              <option value="z-pra-a">Z-A</option>
            </select>
          </span>
          <div className="mt-4">
            <h2 className="py-1 pl-3 text-2xl text-white rounded-md bg-gradient-to-r from-green-400 via-green-500 to-green-600">
              Filtrar por Disciplina
            </h2>
          </div>
          <ul className="p-4 space-y-2">
            <li className="flex items-center">
              <input
                id="portugues"
                type="checkbox"
                value="portugues"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="portugues"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Português
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="matematica"
                type="checkbox"
                value="matematica"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="matematica"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Matemática
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="quimica"
                type="checkbox"
                value="quimica"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="quimica"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Química
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="fisica"
                type="checkbox"
                value="fisica"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="fisica"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Física
              </label>
            </li>
            <li className="flex items-center">
              <input
                id=""
                type="checkbox"
                value="biologia"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="biologia"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Biologia
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="artes"
                type="checkbox"
                value="artes"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="artes"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Artes
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="empreendedorismo"
                type="checkbox"
                value="empreendedorismo"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="empreendedorismo"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Empreendedorismo
              </label>
            </li>
          </ul>
          <div className="mt-4">
            <h2 className="py-1 pl-3 text-2xl text-white rounded-md bg-gradient-to-r from-green-400 via-green-500 to-green-600">
              Filtrar por Turma
            </h2>
          </div>
          <ul className="p-4 space-y-2">
            <li className="flex items-center">
              <input
                id="primeiro-b"
                type="checkbox"
                value="primeiro-a"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="primeiro-a"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                1A
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="primeiro-b"
                type="checkbox"
                value="primeiro-b"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="primeiro-b"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                1B
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="primeiro-c"
                type="checkbox"
                value="primeiro-c"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="primeiro-c"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                1C
              </label>
            </li>
            <li className="flex items-center">
              <input
                id=""
                type="checkbox"
                value=""
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor=""
                className="ml-2 text-sm font-medium text-gray-900"
              >
                2A
              </label>
            </li>
            <li className="flex items-center">
              <input
                id=""
                type="checkbox"
                value=""
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor=""
                className="ml-2 text-sm font-medium text-gray-900"
              >
                2B
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="..."
                type="checkbox"
                value="..."
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="..."
                className="ml-2 text-sm font-medium text-gray-900"
              >
                3A
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="..."
                type="checkbox"
                value="..."
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label
                htmlFor="..."
                className="ml-2 text-sm font-medium text-gray-900"
              >
                3B
              </label>
            </li>
          </ul>
        </aside>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        toggleModal={toggleModal}
        projectId={selectedProjectId}
      />

      {/* Modal 2 */}
      {isAddModalOpen && (
        <ModalAdicionar isOpen={isAddModalOpen} toggleModal={toggleAddModal} />
      )}
    </div>
  );
}

export default Projetos;
