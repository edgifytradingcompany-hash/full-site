import Link from "next/link";

export default function ProductCard({ product }) {
 return (
  <Link href={`/product/${product.id}`}>
   <div className="border rounded p-4 hover:shadow-lg">
    <img src={product.image}/>
    <h3>{product.name}</h3>
    <p>${product.price}</p>
   </div>
  </Link>
 );
}
