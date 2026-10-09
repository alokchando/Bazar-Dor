import Image from "next/image";
import Link from "next/link";

const today = new Intl.DateTimeFormat("bn-BD", {
  dateStyle: "full",
  timeZone: "Asia/Dhaka",
}).format(new Date());
const Hero = () => {
  return (
    <section className="px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-base-200">
        <div className="grid items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-2 md:px-14 md:py-16">
          
          {/* Hero Content */}
          <div className="order-2 space-y-6 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success">
              <span className="h-2 w-2 rounded-full bg-success" />
              {today}
            </span>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-2xl lg:text-3xl">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="max-w-xl text-base leading-8 text-base-content/70 sm:text-lg">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম জানুন সহজেই।
              বাজারভিত্তিক বিস্তারিত তথ্য, গড় দাম এবং দামের পরিবর্তন —
              সবকিছু এক জায়গায়।
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="btn btn-success btn-lg rounded-xl px-7 text-success-content shadow-lg shadow-success/20"
              >
                সব পণ্য দেখুন
              </Link>

              
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 mx-auto w-full max-w-lg md:order-2">
            <div className="absolute inset-6 rounded-full bg-success/10 blur-3xl" />

            <Image
              src="/bazar-Hero.png"
              alt="তাজা শাকসবজি ও নিত্যপ্রয়োজনীয় বাজারসামগ্রী"
              width={600}
              height={500}
              priority
              className="relative h-auto w-full object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

