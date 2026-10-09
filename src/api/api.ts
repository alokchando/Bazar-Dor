import { Category, Product } from "@/type/type";


export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
  return res.json();
};




export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
  return res.json();
};


