import Image from "next/image";
import NavCategories from "./NavCategories";
import PriceTicker from "./NavMarquee";
import UserInfo from "./UserInfo";

const today = new Intl.DateTimeFormat("bn-BD", {
  dateStyle: "full",
  timeZone: "Asia/Dhaka",
}).format(new Date());

const Navbar = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1 flex flex-col items-start">
            <a className="btn btn-ghost text-xl gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-2xl">
                🛒
              </span>
              <span className="font-bold">বাজার দর</span>
            </a>

            <p className="ml-17 -mt-1 text-[12px] text-base-content/70">
              {today}
            </p>
          </div>

          <UserInfo />
        </div>
      </div>
      <NavCategories />
      <PriceTicker />
    </div>
  );
};

export default Navbar;
