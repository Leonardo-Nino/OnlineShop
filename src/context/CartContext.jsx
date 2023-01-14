import {createContext, useContext, useState } from "react"




const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) =>{

const [cartList, setCartList]= useState([])

const addToCart = (product) => {

    const amountIndex = cartList.findIndex(prod => prod.id === product.id)

        if(amountIndex=== -1) {
            
            setCartList([... cartList, product]) 

        }else {
            cartList[amountIndex].amount += product.amount
            setCartList([...cartList])
        }
}

const cleanCart = () =>  setCartList([])

const totalProducts = () => cartList.reduce((count,product) => count += product.amount,0)

const totalPrice = () => cartList.reduce((count,product) => count += (product.amount * product.price),0)

const eraseItem = (id) =>  setCartList( cartList.filter(product => product.id !== id)) 




    return(
        <CartContext.Provider value={{cartList, addToCart, cleanCart, totalProducts,totalPrice, eraseItem}}>
            {children}
        </CartContext.Provider>
    )
}