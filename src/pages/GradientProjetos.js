import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const GradientProjetos = () => {
  const { id } = useParams();
  const [projeto, setProjeto] = useState({ nome: "", descricao: "" });

  useEffect(() => {
    const fetchProjeto = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/projetos/${id}`
        );
        setProjeto({
          nome: response.data.nome,
          descricao: response.data.descricao,
        });
      } catch (error) {
        console.error("Erro ao buscar o projeto:", error);
      }
    };

    fetchProjeto();
  }, [id]);

  return (
    <div className="z-0 pt-16 text-center text-white transition-all h-80 bg-gradient-to-b from-green-400 via-green-500 to-green-600">
      <div className="flex flex-col items-center py-10 mx-auto">
        <div>
          <Link to="/inicio">
            <FaArrowLeft />
          </Link>
        </div>
        <h1 className="z-10 text-4xl font-extrabold sm:text-5xl dark:text-white">
          {projeto.nome}
        </h1>
        <p className="w-full max-w-4xl mt-2 text-center text-gray-200 sm:text-lg">
          {projeto.descricao}
        </p>
      </div>
    </div>
  );
};

export default GradientProjetos;
