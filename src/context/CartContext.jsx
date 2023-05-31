import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export function CartContextProvider({children}){
  const [cart, setCart] = useState([])
  const values = {cart, setCart}
  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () =>{
  const context = useContext(CartContext)
  return context
}