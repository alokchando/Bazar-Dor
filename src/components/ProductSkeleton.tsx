const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="skeleton h-40 w-full rounded-lg" />

          <div className="skeleton mt-4 h-5 w-3/4" />

          <div className="skeleton mt-3 h-5 w-1/2" />
          <div className="skeleton mt-4 h-9 w-full rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
