import { cache } from "react";
import { products } from "@/lib/seed";

export const getProducts = cache(async () => products);

export const getFeaturedProducts = cache(async () =>
  products.filter((product) => product.featured)
);

export const getProductById = cache(async (id: string) =>
  products.find((product) => product.id === id)
);
