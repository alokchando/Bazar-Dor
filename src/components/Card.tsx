import type { Product } from "@/type/type";

const Card = ({ data }: { data: Product }) => {
  return (
    <div className="rounded-lg border border-base-300 bg-base-100 p-3 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-base-200 text-xl">
          {data.categoryIcon}
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-bold">{data.nameBn}</h3>
          <p className="text-xs text-base-content/60">
            {data.unit === "kg"
              ? "প্রতি কেজি"
              : data.unit === "litre"
                ? "প্রতি লিটার"
                : "প্রতি পিস"}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-end justify-between gap-2 border-t border-base-300 pt-3">
        <div>
          <p className="text-xs text-base-content/60">আজকের দাম</p>
          <p className="mt-1 text-2xl font-extrabold">
            {data.today.toLocaleString("bn-BD")}
            <span className="text-sm font-medium"> টাকা</span>
          </p>
        </div>

        <span
          className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            data.change.dir === "up"
              ? "bg-red-100 text-red-600"
              : data.change.dir === "down"
                ? "bg-green-100 text-green-600"
                : "bg-base-200 text-base-content/60"
          }`}
        >
          <span aria-hidden="true">
            {data.change.dir === "up"
              ? "▲"
              : data.change.dir === "down"
                ? "▼"
                : "—"}
          </span>
          {Math.abs(data.change.pct).toLocaleString("bn-BD")}%
        </span>
      </div>
    </div>
  );
};

export default Card;
