import React from 'react'
import { FaArrowLeft } from "react-icons/fa";

const GradientProjetos = () => {
    return (
        <div
            className="z-0 pt-16 text-center text-white transition-all h-80 bg-gradient-to-b from-green-400 via-green-500 to-green-600">
            <div className="flex flex-col items-center py-10 mx-auto">
                <FaArrowLeft className="p-4" />
                <h1 className="z-10 text-4xl font-extrabold sm:text-5xl dark:text-white">Nome do projeto</h1>
                <p className="w-full max-w-4xl mt-2 text-center text-gray-200 sm:text-lg">
                    Aliquip nostrud tempor deserunt id ullamco pariatur eiusmod magna nisi ex in nostrud sunt.
                    Velit do proident irure do minim dolore nostrud laboris ad.
                    Dolore sint duis eu aute sit fugiat aliquip incididunt consequat eiusmod deserunt.
                </p>
            </div>
        </div>
    )
}

export default GradientProjetos;
