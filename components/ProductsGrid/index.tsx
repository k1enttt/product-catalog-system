import { useQuery } from "convex/react";
import Product from "../Product";
import { api } from "@/convex/_generated/api";

const ProductGrid = () => {
  const products = useQuery(api.products.getAll)
  return ( 
    <div className="grid grid-cols-3 gap-4">
    {products?.map((product) => (
      <Product key={product.id} {...product} />
    ))}
    </div>
   );
}
 
export default ProductGrid;