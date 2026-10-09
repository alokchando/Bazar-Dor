import { getProducts } from "@/api/api";
import Card from "./Card";

const PriceIncreased = async () => {
  const products = await getProducts();

  const increasedProducts = products.filter(
    (product) => product.change.dir === "up"
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <h2 className="mb-5 text-2xl font-bold">
        আজ দাম বেড়েছে
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {increasedProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default PriceIncreased;
