"use client";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function AddToCartButton({ product }) {

 const { addToCart } = useContext(CartContext);

 return (
  <button
   className="bg-black text-white px-4 py-2 mt-4"
   onClick={() => addToCart(product)}
  >
   Add to Cart
  </button>
 );
}
