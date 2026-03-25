import { getProducts } from "../lib/api/products";
import ProductCard from "./ProductCard";

export default async function ProductGrid() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
