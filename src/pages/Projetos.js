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
  const [turmas, setTurmas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleModal = (projectId = null) => {
    console.log("Toggling modal for project ID:", projectId);
    setSelectedProjectId(projectId);
    setIsOpen(!isOpen);
  };

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5000/projetos/nome/${searchTerm}`
      );
      setProjetos(response.data);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/turmas")
      .then((response) => {
        setTurmas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar turmas:", error);
      });

    axios
      .get("http://localhost:5000/categorias")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar categorias:", error);
      });

    const fetchProjetos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projetos");
        const userId = localStorage.getItem("userId");
        console.log("UserID: ", userId);
        const projetosData = response.data;

        setProjetos(projetosData);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };

    fetchProjetos();
  }, []);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter((id) => id !== categoryId);
      } else {
        return [...prevSelected, categoryId];
      }
    });
  };

  const handleClassChange = (classId) => {
    setSelectedClasses((prevSelected) => {
      if (prevSelected.includes(classId)) {
        return prevSelected.filter((id) => id !== classId);
      } else {
        return [...prevSelected, classId];
      }
    });
  };

  const filteredProjetos = projetos.filter(
    (projeto) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(projeto.categoria_id)) &&
      (selectedClasses.length === 0 ||
        selectedClasses.includes(projeto.turma_id))
  );

  return (
    <div className="container px-4 py-8 mx-auto bg-white">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        Projetos
      </h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="w-full pt-8 md:w-3/4">
          {/* BOTAO DE PESQUISAR */}
          <form className="flex items-center mx-auto" onSubmit={handleSearch}>
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
              {filteredProjetos.map((projeto) => (
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
                      <span>
                        {
                          categorias.find(
                            (cat) => cat.id === projeto.categoria_id
                          )?.nome
                        }
                      </span>
                      <span>
                        {
                          turmas.find((turma) => turma.id === projeto.turma_id)
                            ?.nome
                        }
                      </span>
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
          </div>
        </aside>

        {/* Componente de filtro, se necessário */}
        <aside className="w-full pt-8 md:w-1/4">
          <div className="mt-4">
            <h2 className="py-1 pl-3 text-2xl text-white rounded-md bg-gradient-to-r from-green-400 via-green-500 to-green-600">
              Filtrar por Disciplina
            </h2>
          </div>
          <ul className="p-4 space-y-2">
            {Array.isArray(categorias) &&
              categorias.map((categoria) => (
                <li key={categoria.id} className="flex items-center">
                  <input
                    id={categoria.id}
                    type="checkbox"
                    value={categoria.id}
                    onChange={() => handleCategoryChange(categoria.id)}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <label
                    htmlFor={categoria.id}
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    {categoria.nome}
                  </label>
                </li>
              ))}
          </ul>
          <div className="mt-4">
            <h2 className="py-1 pl-3 text-2xl text-white rounded-md bg-gradient-to-r from-green-400 via-green-500 to-green-600">
              Filtrar por Turma
            </h2>
          </div>
          <ul className="p-4 space-y-2">
            {Array.isArray(turmas) &&
              turmas.map((turma) => (
                <li key={turma.id} className="flex items-center">
                  <input
                    id={turma.id}
                    type="checkbox"
                    value={turma.id}
                    onChange={() => handleClassChange(turma.id)}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <label
                    htmlFor={turma.id}
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    {turma.nome}
                  </label>
                </li>
              ))}
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
