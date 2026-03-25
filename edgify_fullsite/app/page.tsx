import { getProducts } from "../lib/api/products"
import ProductCard from "../components/ProductCard"

export default async function Home(){

 const products = await getProducts()

 return (

  <div className="p-10">

   <h1 className="text-4xl font-bold mb-8">
    Edgify Marketplace
   </h1>

   <div className="grid grid-cols-3 gap-6">

    {products.map((p:Product)=>(
     <ProductCard key={p.id} product={p}/>
    ))}

   </div>

  </div>
 )
}
type Product = {
  id: string
  name: string
  price: number
  image?: string
}
