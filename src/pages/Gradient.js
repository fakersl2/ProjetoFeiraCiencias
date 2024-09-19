import React from 'react'

const Gradient = () => {
    return (
        <div
            className="z-0 pt-16 text-center text-white transition-all h-80 bg-gradient-to-b from-green-400 via-green-500 to-green-600">
            <div className="flex flex-col items-center py-10 mx-auto">
                <h1 className="z-10 text-4xl font-extrabold sm:text-5xl dark:text-white">Feira de Ciências</h1>
                <p className="w-full max-w-4xl mt-2 text-center text-gray-200 sm:text-lg">A Feira de Ciências do Colégio
                    Comercial
                    de Caçapava é um projeto realizado com os alunos para colocar à mostra alguns dos conhecimentos
                    adquiridos
                    durante o ano letivo.</p>
            </div>
        </div>
    )
}

export default Gradient;
