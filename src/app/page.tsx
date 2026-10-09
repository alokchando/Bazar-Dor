import AllProducts from "@/components/AllProducts";
import Hero from "@/components/Hero";
import PriceDecreased from "@/components/PriceDecreased";
import PriceIncreased from "@/components/PriceIncreased";




const page = () => {
  return (
    <div>
      <Hero/>
      <PriceIncreased/>
      <PriceDecreased/>
      <AllProducts/>
    </div>
  );
};

export default page;