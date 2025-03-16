'use client'
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";
import ImageSkeleton from "../ImageSkeleten";
import type { Product } from "@/schemas";
import ProductCard from "../Product";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const convex = useConvex();

  useEffect(() => {
    convex.query(api.products.getAll).then((products) => setProducts(products as unknown as Product[]));
  }, [convex]);
  
  return (
    <ul className="grid grid-cols-3 gap-4">
      {products && products.map((product: Product, index) => <ProductCard key={index} {...product} />)}
      {!products && Array.from({ length: 6 }).map((_, index) => <ImageSkeleton key={index} />)} 
    </ul>
  );
};

export default ProductGrid;
