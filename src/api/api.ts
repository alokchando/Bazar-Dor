import { Category, Product } from "@/type/type";


export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
  return res.json();
};




export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
  return res.json();
};
export const getCategory = async (sulg: string): Promise<Product[]> => {
  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${sulg}`);
  return res.json();
};




export const getProduct = async (id: number): Promise<Product> => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${id}`
  );
  return res.json();
};


