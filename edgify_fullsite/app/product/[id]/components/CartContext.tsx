"use client";
import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
 const [cart, setCart] = useState([]);

 function addToCart(product) {
  setCart([...cart, product]);
 }

 function removeFromCart(id) {
  setCart(cart.filter(p => p.id !== id));
 }

 return (
  <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
   {children}
  </CartContext.Provider>
 );
}
