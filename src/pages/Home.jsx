import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Home = () => {

    const { products } = useContext(ProductContext)

    const FilteredProducts = products.filter(item => {
        return item.category === "men's clothing" || item.category === "women's clothing"
    })
    
    return (
        <div>
            <Hero />
            <Stats />
            <section className='py-16'>
                <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                    <h2 className="text-2xl sm:text-4xl font-bold">Our Latest Products</h2>
                    <p className="text-gray-500 text-sm sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. ad temporibus.</p>
                </div>
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                        {FilteredProducts.map((product) => {
                            return <Product product={product} key={product.id} />
                        })}
                    </div>
                </div>
            </section>
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Home