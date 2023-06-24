import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { ProductContext } from '../contexts/ProductContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductDetails = () => {

    const notify = () => toast.success('Product Added To Cart', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
    })

    const {id} = useParams()

    const {products} = useContext(ProductContext)

    const {AddToCart} = useContext(CartContext)

    const product = products.find(item => {
        return item.id === parseInt(id)
    })

    if(!product) {
        return <section className='h-screen flex justify-center items-center'>Loading...</section>
    }

    const {title, price, description, image} = product

    return (
        <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                        <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
                    </div>

                    <div className='flex-1 text-center lg:text-left'>
                        <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
                        <div className='text-xl text-blue-500 font-medium mb-6'>${price}</div>
                        <p className='mb-8'>{description}</p>
                        <button onClick={() => {AddToCart(product, product.id), notify()}} className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300'>Add To Cart</button>
                        <ToastContainer
                            position="top-left"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss={false}
                            draggable={false}
                            pauseOnHover={false}
                            theme="light"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails