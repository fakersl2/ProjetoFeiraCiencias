import React from 'react'
import Logo from '../assets/img/logo.png'
import PersonIcon from '../assets/img/personicon.svg'

const HeaderNav = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                    <a target="_blank" href="http://colegiocomercialcpv.com.br/"
                        className="flex items-center space-x-3 rtl:space-x-reverse transition-all hover:scale-105" rel="noreferrer">
                        <img src={Logo} alt="Logo" className="w-auto h-12" />
                    </a>
                    <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse bg-white text-black">
                        <button type="button"
                            className="flex text-sm bg-white rounded-full md:me-0 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-400 bg-white transition-all hover:scale-105"
                            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom">
                                <p className='z-10 bg-white text-black mx-1 mt-1 font-semibold'>Nome usuario</p>
                            <span className="sr-only">Open user menu</span>
                            <img src={PersonIcon} alt="Logo" className="w-8 h-8 bg-white border-none rounded-full outline-none" />
                            
                        </button>
                        <div
                            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Comercial</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        Trocar de conta</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul
                            className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href=""
                                    className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Colégio
                                    Comercial de Caçapava
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderNav;
