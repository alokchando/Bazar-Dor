import { getProducts } from "@/app/api/api";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const NavMarquee = async () => {
  const getProduct = await getProducts();

  return (
    <div>
      <Marquee>
        <div className="flex items-center gap-12 whitespace-nowrap">
          {getProduct.map((i) => (
            <Link href={`/product/${i.id}`} key={i.id}>
              <div>
                <div className="">
                  <div className="flex gap-2">
                    <p>{i.categoryIcon}</p>
                    <p>{i.nameBn}</p>
                    <p>
                      {i.today} টাকা/
                      <span>
                        {i.unit === "kg"
                          ? "প্রতি কেজি"
                          : i.unit === "litre"
                            ? "প্রতি লিটার"
                            : "প্রতি পিস"}
                      </span>
                    </p>
                    <p
                      className={
                        i.change.dir === "up"
                          ? "text-red-600"
                          : i.change.dir === "down"
                            ? "text-green-600"
                            : "text-gray-400"
                      }
                    >
                      {i.change.dir === "up"
                        ? "▲"
                        : i.change.dir === "down"
                          ? "▼"
                          : "—"}
                      {Math.abs(i.change.pct)}%
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default NavMarquee;
