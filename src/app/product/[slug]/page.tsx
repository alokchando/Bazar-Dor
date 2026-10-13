import { getProduct } from "@/api/api";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

const getUnit = (unit: string) => {
  if (unit === "kg") return " কেজি";
  if (unit === "litre") return " লিটার";
  return "প্রতি পিস";
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("bn-BD").format(price);
};

const Product = async ({ params }: Props) => {
  const { slug } = await params;
  const product = await getProduct(Number(slug));

  const markets = product.markets;

  const prices = markets.flatMap((market) => [market.min, market.max]);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const avgPrice =
    markets.reduce(
      (total, market) => total + (market.min + market.max) / 2,
      0,
    ) / markets.length;
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-6">
      <div className="breadcrumbs mb-6 text-sm text-base-content/60">
        <ul>
          <li>
            <Link href="/">হোম</Link>
          </li>
          <li>
            <Link href={`/category/${product.category}`}>
              {product.categoryNameBn}
            </Link>
          </li>
          <li>{product.nameBn}</li>
        </ul>
      </div>

      <section className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-base-200 text-4xl sm:size-24 sm:text-5xl">
              {product.image}
            </div>
            <div>
              <p className="text-xs text-base-content/60 sm:text-sm">
                প্রতি {getUnit(product.unit)} • {product.categoryNameBn}
              </p>
              <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                {product.nameBn}
              </h1>
              <p className="mt-1 text-xs text-base-content/60 sm:text-sm">
                গতকালের তুলনায় আজ দাম{" "}
                {product.change.dir === "down"
                  ? "কমেছে"
                  : product.change.dir === "up"
                    ? "বেড়েছে"
                    : "পরিবর্তন হয়নি"}
                {formatPrice(Math.abs(product.change.pct))} টাকা
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-base-300 bg-base-200/50 p-4 text-center sm:min-w-[160px]">
            <p className="text-xs text-base-content/60">আজকের দাম</p>
            <p className="mt-1 text-2xl font-bold sm:text-3xl">
              {formatPrice(product.today)}
            </p>
            <p className="text-xs text-base-content/60">
              টাকা / {getUnit(product.unit)}
            </p>
            <div
              className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${
                product.change.dir === "down"
                  ? "text-success"
                  : product.change.dir === "up"
                    ? "text-error"
                    : "text-base-content"
              }`}
            >
              {product.change.dir === "down"
                ? "▼"
                : product.change.dir === "up"
                  ? "▲"
                  : ""}{" "}
              {formatPrice(product.change.pct)}%
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold">দামের সারসংক্ষেপ</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
            <p className="text-sm text-base-content/60">সর্বনিম্ন দাম</p>
            <p className="mt-2 text-2xl font-bold text-success">
              {formatPrice(minPrice)} টাকা
            </p>
            <p className="mt-1 text-xs text-base-content/50">
              সবচেয়ে কম দামের বাজার
            </p>
          </div>

          <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
            <p className="text-sm text-base-content/60">সর্বাধিক দাম</p>
            <p className="mt-2 text-2xl font-bold text-error">
              {formatPrice(maxPrice)} টাকা
            </p>
            <p className="mt-1 text-xs text-base-content/50">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>

          <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
            <p className="text-sm text-base-content/60">গড় দাম</p>
            <p className="mt-2 text-2xl font-bold text-success">
              {formatPrice(Math.round(avgPrice))} টাকা
            </p>
            <p className="mt-1 text-xs text-base-content/50">
              প্রতি {getUnit(product.unit)}-এর হিসাবে
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-4">
          <h2 className="text-xl font-bold sm:text-2xl">
            বাজারভিত্তিক আজকের দাম
          </h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-base-300 bg-base-100 shadow-sm">
          <table className="table w-full">
            <thead>
              <tr className="border-b border-base-300 text-sm text-base-content/70">
                <th>বাজার</th>
                <th>বিভাগ</th>
                <th>সর্বনিম্ন</th>
                <th>সর্বাধিক</th>
                <th>গড়</th>
              </tr>
            </thead>
            <tbody>
              {markets.map((market, index) => {
                const marketAvg = Math.round((market.min + market.max) / 2);
                return (
                  <tr
                    key={`${market.market} ${index}`}
                    className={`border-b border-base-200 hover:bg-base-200/40 ${
                      index % 2 === 0 ? "bg-white" : "bg-[#f4f6f0]"
                    }`}
                  >
                    <td className="font-semibold">{market.market}</td>
                    <td>{market.division}</td>
                    <td>{formatPrice(market.min)} টাকা</td>
                    <td>{formatPrice(market.max)} টাকা</td>
                    <td>{formatPrice(marketAvg)} টাকা</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Product;
