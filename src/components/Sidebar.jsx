import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'

const Sidebar = () => {

    const {isOpen, HandleClose} = useContext(SidebarContext)
    const {cart, ClearCart, total, itemAmount} = useContext(CartContext)

    return (
        <>
                <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-auto`}>
                    <div className='flex items-center justify-between py-6 border-b'>
                        <div className='uppercase text-sm font-semibold'>Shopping Bag</div>
                        <div onClick={HandleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                            <IoMdArrowForward className='text-2xl' />
                        </div>
                    </div>
        
                    
                    {itemAmount > 0 ? (
                            <>
                                <div className='flex flex-col gap-y-2 h-[320px] lg:h-[55%] overflow-y-auto overflow-x-auto border-b'>
                                    {cart.map(item => {
                                        return <CartItem item={item} key={item.id} />
                                    })}
                                </div>
        
                                <div className='flex flex-col gap-y-3 py-4 mt-4'>
                                    <div className='flex w-full justify-between items-center'>
                                        <div className='uppercase font-semibold'>
                                            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
                                        </div>
                    
                                        <div onClick={ClearCart} className='cursor-pointer py-4 bg-rose-600 text-white w-12 h-12 flex justify-center items-center text-xl'><FiTrash2 /></div>
                                    </div>
                    
                                    <Link to={'/cart'} className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-semibold'>View Cart</Link>
                                </div>
                            </>
                    ) : <h1 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-red-600 text-center uppercase text-xl'>Your bag is empty</h1>}
                </div>
        </>
    )
}

export default Sidebar