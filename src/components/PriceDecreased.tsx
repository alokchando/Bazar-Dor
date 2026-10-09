import { getProducts } from "@/api/api";
import Card from "./Card";

const PriceDecreased = async () => {
  const products = await getProducts();

  const deCreasedProducts = products.filter(
    (product) => product.change.dir === "down"
  );

  return (
 <section className="mx-auto max-w-7xl px-4 py-8">
      <h2 className="mb-5 text-2xl font-bold">
        আজ দাম কমেছে
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {deCreasedProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default PriceDecreased;
