"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";

export default function CartPage() {

 const { cart } = useContext(CartContext);

 return (
  <div className="p-10">

   <h1 className="text-3xl mb-6">Your Cart</h1>

   {cart.map(item => (
    <div key={item.id} className="border p-4 mb-4">
     {item.name} - ${item.price}
    </div>
   ))}

  </div>
 );
}
