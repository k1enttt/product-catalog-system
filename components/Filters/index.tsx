import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export type Color = {
  name: string;
  value: string;
};

export type Size = {
  name: string;
  value: number;
  hex: string;
};

export type Product = {
  name: string;
  thumbnail: string;
  images: string[];
  description: string;
  price: number;
  colors: Color[];
  sizes: Size[];
  quantity: number;
}

const Filters = () => {
  const colors = useQuery(api.colors.get);
  const sizes = useQuery(api.sizes.get);
  
  return (
    <div>
      <div className="flex gap-4 items-center">
        <h4 className="text-h4 font-semibold">Filters</h4>
        <button className="text-gray-400 underline">Clear filters</button>
      </div>
      <div className="mt-6">
        <h5 className="font-bold">Sizes</h5>
        <ul className="mt-4">
          {sizes?.map((size: Size) => (
            <li key={size.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-black"
                value={size.value}
              />
              <span>{size.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 w-fit">
        <h5 className="font-bold">Colors</h5>
        <div className="mt-4 grid grid-cols-5 gap-2">
          {colors?.map((color: Color) => (
            <div
              key={color.value}
              className="w-6 h-6 rounded-full border border-black"
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
