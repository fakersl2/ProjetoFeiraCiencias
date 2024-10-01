import React, { useEffect, useState } from 'react';
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Avaliacoes = () => {
    const { id } = useParams();
    const [votos, setVotos] = useState({ positivos: 0, neutros: 0, negativos: 0 });
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        const fetchVotos = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/votos/${id}`);
                const avaliacoes = response.data;
                const positivos = avaliacoes.filter(avaliacao => avaliacao.nota === 'bom').length;
                const neutros = avaliacoes.filter(avaliacao => avaliacao.nota === 'médio').length;
                const negativos = avaliacoes.filter(avaliacao => avaliacao.nota === 'ruim').length;
                const total = positivos + neutros + negativos;

                setVotos({
                    positivos: (positivos / total) * 100,
                    neutros: (neutros / total) * 100,
                    negativos: (negativos / total) * 100,
                    totalPositivos: positivos,
                    totalNeutros: neutros,
                    totalNegativos: negativos
                });

                const comentariosFiltrados = avaliacoes
                    .map(avaliacao => avaliacao.comentario)
                    .filter(comentario => comentario && comentario.trim() !== '');
                setComentarios(comentariosFiltrados);
            } catch (error) {
                console.error('Erro ao buscar os votos:', error);
            }
        };

        fetchVotos();
    }, [id]);

    return (
        <div className="p-4 rounded-lg bg-green-50">
            <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-bold text-black">Votos</span>
                <div className="flex space-x-2">
                    <span className="flex items-center text-green-600" aria-label={`${votos.totalPositivos} votos positivos`}>
                        <BsEmojiSmile className="w-5 h-5 mr-1" />
                        {votos.totalPositivos}
                    </span>
                    <span className="flex items-center text-gray-600" aria-label={`${votos.totalNeutros} votos neutros`}>
                        <BsEmojiNeutral className="w-5 h-5 mr-1" />
                        {votos.totalNeutros}
                    </span>
                    <span className="flex items-center text-red-600" aria-label={`${votos.totalNegativos} votos negativos`}>
                        <BsEmojiFrown className="w-5 h-5 mr-1" />
                        {votos.totalNegativos}
                    </span>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-xl text-green-500">
                    <BsEmojiSmile />
                </span>
                <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="flex h-4 overflow-hidden rounded-full">
                        <div className="bg-green-500" role="progressbar" style={{ width: `${votos.positivos}%` }} aria-valuenow={votos.positivos}
                            aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="bg-gray-500" role="progressbar" style={{ width: `${votos.neutros}%` }} aria-valuenow={votos.neutros}
                            aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="bg-red-500" role="progressbar" style={{ width: `${votos.negativos}%` }} aria-valuenow={votos.negativos}
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <span className="text-xl text-red-500">
                    <BsEmojiFrown />
                </span>
            </div>

            <h1 className="pt-20 text-3xl font-bold text-black dark:text-white">Comentários</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {comentarios.map((comentario, index) => (
                    <div key={index} className="p-4 rounded-md bg-green-50">{comentario}</div>
                ))}
            </div>
        </div>
    );
};

export default Avaliacoes;
