import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { CartContext } from '../contexts/CartContext'

const Cart = () => {

    const {cart, ClearCart, total, itemAmount} = useContext(CartContext)

    return (
        <>
            {itemAmount > 0 ? (
                <div className='mt-20 relative mx-auto max-w-3xl transition-all duration-300 z-0 px-4 lg:px-[35px]'>
                    <div className='flex items-center justify-between py-6 border-b'>
                        <div className='uppercase text-xl font-semibold'>Your Cart</div>
                    </div>
    
                    <div className='flex flex-col gap-y-2 h-[320px] lg:h-[55%] overflow-y-auto overflow-x-auto border-b'>
                        {cart.map(item => {
                            return <CartItem item={item} key={item.id} />
                        })}
                    </div>

                    <div className='flex flex-col gap-y-3 py-4 mt-4'>
                        <div className='flex w-full justify-between items-center'>
                            <div className='uppercase font-semibold'>
                                <span className='mr-2'>Total:</span>${parseFloat(total).toFixed(2)}
                            </div>
        
                            <div onClick={ClearCart} className='cursor-pointer py-2 px-4 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 rounded-md flex justify-center items-center text-lg'>Clear Cart</div>
                        </div>
        
                        <Link to={''} className='text-white rounded-md bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 flex p-4 justify-center items-center w-full font-semibold'>Continue to checkout</Link>
                        <Link to={'/'} className='text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 rounded-md flex p-4 justify-center items-center w-full font-semibold'>Back to shop</Link>
                    </div>
                </div>
            ) : (
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-6'>
                    <h1 className='text-red-600 text-center uppercase text-xl sm:text-3xl'>Your cart is empty</h1>
                    <Link to={'/'} className='text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-400 rounded-md flex p-4 justify-center items-center w-full font-semibold'>Home</Link>
                </div>
            )}
        </>
    )
}

export default Cart