import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { BsBag } from 'react-icons/bs'
import { TbShirt } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Header = () => {

    const [isActive, setIsActive] = useState(false)

    const { isOpen, setIsOpen } = useContext(SidebarContext)
    const { itemAmount } = useContext(CartContext)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    }, [])

    return (
        <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
            <div className='container mx-auto flex items-center justify-between h-full'>
                <Link to='/'>
                    <div className='flex items-center justify-center text-4xl bg-blue-500 text-white w-12 h-12 rounded-full'>
                        <TbShirt />
                    </div>
                </Link>
                <div onClick={() => setIsOpen(!isOpen)} className='flex items-center justify-center text-4xl bg-blue-500 text-white w-12 h-12 rounded-full cursor-pointer relative'>
                    <BsBag className='text-2xl' />
                    <div className='bg-blue-400 absolute -right-1 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
                </div>
            </div>
        </header>
    )
}

export default Header