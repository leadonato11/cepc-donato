import React, { useState } from 'react';

export const CartContext = React.createContext([])

export const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([])

    const addItem = (itemId, quantity) => {
        if (isInCart(itemId)) {
            console.log("No se puede agregar al carrito, ya existe en el")
            return 
        }
        setCart([
            ...cart,
            {id: itemId, quantity}
        ])
    }

    const removeItem = (itemId) => {
        const itemIndex = indexInCart(itemId)
        const copyCart = [...cart]
        copyCart.splice(itemIndex, 1)
        setCart(copyCart)
    }

    const isInCart = (itemId) => indexInCart(itemId) > -1 ? true : false

    const indexInCart = (itemId) => cart.findIndex(item=>item.id === itemId)

    const clear = () => setCart([])

    const cantItemsInCart = ( () => {
        let acum = 0
        cart.forEach(item => {
            acum += item.quantity
        })
        return acum
    })()

    const cartEmpty = cantItemsInCart === 0

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cantItemsInCart, cartEmpty}}>
            {children}
        </CartContext.Provider>
    );
};