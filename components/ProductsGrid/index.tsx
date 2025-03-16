'use client'
import { useConvex } from "convex/react";
import Product from "../Product";
import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";
import ImageSkeleton from "../ImageSkeleten";

const ProductGrid = () => {
  const [products, setProducts] = useState<any>(null);

  const convex = useConvex();

  useEffect(() => {
    convex.query(api.products.getAll).then(setProducts);
  }, []);
  
  return (
    <ul className="grid grid-cols-3 gap-4">
      {products && products.map((product: any) => <Product key={product.id} {...product} />)}
      {!products && Array.from({ length: 6 }).map((_, index) => <ImageSkeleton key={index} />)}
    </ul>
  );
};

export default ProductGrid;
