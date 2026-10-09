import { getCategories } from "@/api/api";
import Link from "next/link";

const NavCategories = async () => {
  const categories = await getCategories();

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-start gap-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="flex items-center gap-2  text-sm font-semibold transition hover:border-green-500 hover:bg-green-50 hover:text-green-700"
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.nameBn}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavCategories;
