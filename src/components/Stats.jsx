import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { BiHappyBeaming } from 'react-icons/bi'
import { TbTruckDelivery, TbShirt } from 'react-icons/tb'

const Stats = () => {

    const data = [
        {title: 'Ready', subtitle: 'We Never Run Out Of Stock', icon: <FiShoppingCart />},
        {title: 'Customers Choice', subtitle: 'Keeping Customers Happy', icon: <BiHappyBeaming />},
        {title: 'Free Shipping', subtitle: 'On All Orders', icon: <TbTruckDelivery />},
        {title: 'Fresh', subtitle: 'New Items Everyday', icon: <TbShirt />}
    ]

    return (
        <section className="p-6 my-6">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                <h2 className="text-2xl sm:text-4xl font-bold">Why shopping with us?</h2>
                <p className="text-gray-500 text-sm sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. ad temporibus.</p>
            </div>
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                {
                    data.map((item, id) => {
                        return (
                            <div key={id} className="flex shadow-lg p-4 space-x-4 rounded-lg md:space-x-6">
                                <div className="flex justify-center text-4xl text-blue-500 p-2 align-middle rounded-lg sm:p-4">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-xl sm:text-2xl mb-1 font-semibold leading-none">{item.title}</p>
                                    <p className="text-sm sm:text-base capitalize">{item.subtitle}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Stats