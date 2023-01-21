import { createContext, useState } from "react";

export const CartContext = createContext()



export const CartProvider = ({children}) =>{

    const [cart, setCart]=useState([])
  console.log(cart);

    const addCart = (item) =>{
      setCart([...cart, item])
      
    }

    const isIncart = (id) =>{
      return cart.some(item => item.id === id)
    }

    const emptyCart = () =>{
      setCart([])
    }

    const removeItem = (id) =>{
        setCart(cart.filter(item => item.id !== id))
    }

    const totalPriceCart = () =>{
        return cart.reduce((acc, item) => acc + item.price * item.productCount, 0)
    }

    const showCartNumber = () =>{
        return cart.reduce((acc, item) => acc + item.productCount, 0)
    }


    return (
        <CartContext.Provider value={{
            cart,
            addCart,
            isIncart,
            emptyCart,
            removeItem,
            totalPriceCart,
            showCartNumber
        }}>
            {children}
        </CartContext.Provider>
    )
}