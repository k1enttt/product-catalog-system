"use client";
import { api } from "@/convex/_generated/api";
import type { Color, Size } from "@/schemas";
import { useConvex } from "convex/react";
import { useEffect, useState } from "react";

const Filters = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);

  const convex = useConvex();

  useEffect(() => {
    convex.query(api.colors.get).then(setColors);
    convex.query(api.sizes.get).then(setSizes);
  }, []);

  return (
    <div>
      <div className="flex gap-4 items-center">
        <h4 className="text-h4 font-semibold">Filters</h4>
        <button className="text-gray-400 underline">Clear filters</button>
      </div>
      <div className="mt-6">
        <h5 className="font-bold">Sizes</h5>
        <ul className="mt-4">
          {sizes.length > 0 &&
            sizes.map((size: Size) => (
              <li key={size.value} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-black"
                  value={size.value}
                />
                <span>{size.name}</span>
              </li>
            ))}
            {
              sizes.length == 0 && <div>Loading...</div>
            }
        </ul>
      </div>
      <div className="mt-6 w-fit">
        <h5 className="font-bold">Colors</h5>
        <div className="mt-4 grid grid-cols-5 gap-2">
          {colors.length > 0 &&
            colors.map((color: Color) => (
              <div
                key={color.value}
                className="w-6 h-6 rounded-full border border-black"
                style={{ backgroundColor: color.value }}
              />
            ))}
            {
              colors.length == 0 && <div>Loading...</div>
            }
        </div>
      </div>
    </div>
  );
};

export default Filters;
