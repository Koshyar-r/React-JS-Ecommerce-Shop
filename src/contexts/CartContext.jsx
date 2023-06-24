import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const [itemAmount, setItemAmount] = useState(0)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0)
        setTotal(total)
    })

    useEffect(() => {
        if(cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount
            }, 0)
            setItemAmount(amount)
        }
    }, [cart])

    const AddToCart = (product, id) => {
        const newItem = { ...product, amount: 1 }
        const CartItem = cart.find(item => {
            return item.id === id
        })
        if(CartItem) {
            const newCart = [...cart].map(item => {
                if(item.id === id) {
                    return {...item, amount: CartItem.amount + 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }

    const RemoveFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id
        })
        setCart(newCart)
    }

    const ClearCart = () => {
        setCart([])
    }

    const IncreaseAmount = (id) => {
        const cartItem = cart.find(item => item.id === id)
        AddToCart(cartItem, id)
    }

    const DecreaseAmount = (id) => {
        const cartItem = cart.find(item => {
            return item.id === id
        })
        if(cartItem) {
            const newCart = cart.map(item => {
                if(item.id === id) {
                    return {...item, amount: cartItem.amount - 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
        if(cartItem.amount < 2) {
            RemoveFromCart(id)
        }
    }

    return (
        <CartContext.Provider value={{ cart, AddToCart, RemoveFromCart, ClearCart, IncreaseAmount, DecreaseAmount, itemAmount, total }}>{children}</CartContext.Provider>
    )
}

export default CartProvider