import { query } from "./_generated/server";
import { v } from 'convex/values'

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

export const getBySearchAndFilter = query({
  args: { prompt: v.string(), colorValue: v.array(v.string()), sizeValue: v.array(v.string()) },
  handler: async (ctx, args) => {
    const allProducts = await ctx.db.query("products").collect();
    let filteredProducts  = allProducts.filter((product) => product.name.includes(args.prompt));

    if (args.colorValue.length > 0) {
      filteredProducts = filteredProducts.filter((product) => 
        args.colorValue.every(color => product.colors.includes(color))
      );
    }

    if (args.sizeValue.length > 0) {
      filteredProducts = filteredProducts.filter((product) => args.sizeValue.every(size => product.sizes.includes(size)));
    }

    return filteredProducts;
  },
});
