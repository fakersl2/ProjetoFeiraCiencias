import React from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";

const avaliacoes = () => {
    return (
        <div className="p-4 rounded-lg bg-green-50">
            <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-bold text-black">Votos</span>
                <div className="flex space-x-2">
                    <span className="flex items-center text-green-600" aria-label="16 votos positivos">
                        <BsEmojiSmile className="w-5 h-5 mr-1" />
                        16
                    </span>
                    <span className="flex items-center text-gray-600" aria-label="7 votos neutros">
                        <BsEmojiNeutral className="w-5 h-5 mr-1" />
                        7
                    </span>
                    <span className="flex items-center text-red-600" aria-label="7 votos negativos">
                        <BsEmojiFrown className="w-5 h-5 mr-1" />
                        7
                    </span>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-xl text-green-500">
                    <BsEmojiSmile />
                </span>
                <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="flex h-4 overflow-hidden rounded-full">
                        <div className="bg-green-500" role="progressbar" style={{ width: '50%' }} aria-valuenow="50"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="bg-gray-500" role="progressbar" style={{ width: '25%' }} aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="bg-red-500" role="progressbar" style={{ width: '25%' }} aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <span className="text-xl text-red-500">
                    <BsEmojiFrown />
                </span>
            </div>


            <h1 className="pt-20 text-3xl font-bold text-black dark:text-white">Comentários</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="p-4 rounded-md bg-green-50">Aqui um exemplo de opinião ou sugestão...</div>
                <div className="p-4 rounded-md bg-green-50">Aqui um exemplo de opinião ou sugestão...</div>
                <div className="p-4 rounded-md bg-green-50">Aqui um exemplo de opinião ou sugestão...</div>
            </div>
        </div>
    )
}

export default avaliacoes;