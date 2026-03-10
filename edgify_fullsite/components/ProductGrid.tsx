import { products } from "../lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid(){
 return (
  <div className="grid grid-cols-3 gap-6">
   {products.map(p => (
    <ProductCard key={p.id} product={p}/>
   ))}
  </div>
 );
}
