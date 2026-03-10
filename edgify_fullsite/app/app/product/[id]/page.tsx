import { products } from "../../../lib/products";

export default function ProductPage({ params }) {

 const product = products.find(p => p.id == params.id);

 return (
  <div className="p-10">

   <img src={product.image}/>

   <h1>{product.name}</h1>

   <p>{product.description}</p>

   <p>${product.price}</p>

  </div>
 );
}
