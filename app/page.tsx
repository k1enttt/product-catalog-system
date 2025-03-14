"use client";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductsGrid";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-public-sans)]">
      <Header />
      <Hero />
      <div className="container w-full flex gap-4 pt-10">
        <div className="w-1/4">
          <Filters />
        </div>
        <div className="w-3/4">
          {/* Right content here */}
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
