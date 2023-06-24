import React from 'react'
import Img from '../images/hero2.jpg'
import { FaFacebook, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa'

const Hero = () => {
    return (
        <section class="bg-white dark:bg-gray-900 h-[100vh]">
            <img className='w-full h-full object-cover' src={Img} alt="" />
            <div class="absolute top-[20%] py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Always go out in <span className='text-blue-400'>style</span> with us</h1>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate repudiandae debitis repellat non, ullam aliquam eaque corporis commodi! Qui.</p>
                <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" class="inline-flex gap-1 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Learn more <FaArrowRight />
                    </a>
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:ring-blue-400">
                        Purchase Now
                    </a>
                </div>
                <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <span class="font-semibold text-gray-300 uppercase">follow us</span>
                    <div class="flex flex-wrap gap-10 justify-center items-center mt-8 text-gray-400">
                        <a href="#" class="text-3xl hover:text-gray-200 mb-5 lg:mb-0">
                            <FaFacebook />
                        </a>
                        <a href="#" class="text-3xl hover:text-gray-200 mb-5 lg:mb-0">
                            <FaInstagram />
                        </a>
                        <a href="#" class="text-3xl hover:text-gray-200 mb-5 lg:mb-0">
                            <FaTwitter />
                        </a>
                    </div>
                </div> 
            </div>
    </section>
    )
}

export default Hero