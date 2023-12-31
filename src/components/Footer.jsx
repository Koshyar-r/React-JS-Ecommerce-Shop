import React from 'react'
import { TbShirt } from 'react-icons/tb'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="py-6 bg-blue-500 text-gray-50">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-100 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                            <div className="flex items-center justify-center text-4xl bg-blue-600 text-white w-12 h-12 rounded-full">
                                <TbShirt />
                            </div>
                            <span className="self-center text-2xl font-semibold">Fake Shop</span>
                        </a>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Category</p>
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" href="#">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Category</p>
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" href="#">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2023 All rights reserved</span>
                        <a rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </a>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center text-white text-2xl w-10 h-10 rounded-full">
                            <FaFacebook />
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center text-white text-2xl w-10 h-10 rounded-full">
                            <FaInstagram />
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center text-white text-2xl w-10 h-10 rounded-full">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer