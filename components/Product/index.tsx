import Image from "next/image";
import type { Product } from "@/schemas";

const Product = (data: Product) => {
  return (
    <div>
      <Image
        loading="lazy"
        src="/tshirt.avif"
        alt="Product Image"
        width={400}
        height={400}
      />
      <div className="flex items-center justify-between">
        <span>{data.name}</span>
        <span>M</span>
      </div>
      <div>
        <span>${data.price}</span>
      </div>
    </div>
  );
};

export default Product;
