import { getProducts } from "@/api/api";
import Card from "./Card";

const AllProducts = async() => {
      const products = await getProducts();
    return (
        <section className="mx-auto max-w-7xl px-4 py-8">
      <h2 className=" text-2xl font-bold mb-2">
        সব পণ্য
      </h2>
      <p className="text-xs text-base-content/60 mb-4">মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </section>
    );
};

export default AllProducts;