import { getCategory } from "@/app/api/api";
import CategoryProducts from "@/components/CategoryProducts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const products = await getCategory(slug);

  const category = products[0];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="flex items-center gap-4  bg-[#ffff] p-4 md:p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center text-3xl md:h-14 md:w-14">
          <span>{category?.categoryIcon}</span>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl leading-tight font-bold text-gray-900 md:text-2xl">
            {category.categoryNameBn}
          </h2>

          <p className="mt-0.5 text-xs font-normal text-gray-500 md:text-sm">
            {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>
      <CategoryProducts products={products} />
    </main>
  );
}
