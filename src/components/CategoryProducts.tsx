"use client";

import { useState } from "react";
import Card from "@/components/Card";
import type { Product } from "@/type/type";

type Props = {
  products: Product[];
};

export default function CategoryProducts({ products }: Props) {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products];

  if (sort === "low-to-high") {
    sortedProducts.sort((a, b) => a.today - b.today);
  } else if (sort === "high-to-low") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-end gap-3">
        <label className="flex items-center gap-2">
          <span className="text-sm">সাজান:</span>

          <select
            className="select select-bordered select-sm"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-to-high">দাম: কম থেকে বেশি</option>
            <option value="high-to-low">দাম: বেশি থেকে কম</option>
          </select>
        </label>
      </div>

      {sortedProducts.length === 0 ? (
        <p className="py-12 text-center text-base-content/60">
          কোনো পণ্য পাওয়া যায়নি।
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {sortedProducts.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
      )}
    </>
  );
}
