import React from 'react'

const avaliacoes = () => {
    return (
        <div className="p-4 rounded-lg bg-green-50">
            <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-extrabold text-black">Votos</span>
                <div className="flex space-x-2">
                    <span className="flex items-center text-green-600" aria-label="16 votos positivos">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2H9v-2zm0-6h2v4H9V7z" />
                        </svg>
                        16
                    </span>
                    <span className="flex items-center text-gray-600" aria-label="7 votos neutros">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2H9v-2zm0-6h2v4H9V7z" />
                        </svg>
                        7
                    </span>
                    <span className="flex items-center text-red-600" aria-label="7 votos negativos">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2H9v-2zm0-6h2v4H9V7z" />
                        </svg>
                        7
                    </span>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-xl text-green-500">😊</span>
                <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="flex h-4 overflow-hidden rounded-full">
                        <div className="bg-green-500" role="progressbar" style={{width: '50%'}} aria-valuenow="50"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="bg-gray-500" role="progressbar" style={{width: '25%'}} aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="bg-red-500" role="progressbar" style={{width: '25%'}} aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <span className="text-xl text-red-500">😞</span>
            </div>

         
            <h1 className="pt-20 text-3xl font-extrabold text-black dark:text-white">Comentários</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="p-4 rounded-md bg-green-50">Aqui um exemplo de opinião ou sugestão...</div>
                <div className="p-4 rounded-md bg-green-50">Aqui um exemplo de opinião ou sugestão...</div>
                <div className="p-4 rounded-md bg-green-50">Aqui um exemplo de opinião ou sugestão...</div>
            </div>
        </div>
    )
}

export default avaliacoes;