import Image from "next/image";
import NavCategories from "./NavCategories";
import PriceTicker from "./NavMarquee";

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
  {/* Website logo and title */}
  <a className="btn btn-ghost text-xl gap-3">
    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-2xl">
      🛒
    </span>
    <span className="font-bold">বাজার দর</span>
  </a>

  {/* Date directly below the title */}
  <p className="ml-17 -mt-1 text-[12px] text-base-content/70">
    {today}
  </p>
</div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {/* User profile image */}
                {/* <Image
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User avatar"
                  width={40}
                  height={40}
                /> */}
              </div>
            </div>

            {/* User profile dropdown menu */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                {/* User name */}
                <p>alok</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <NavCategories/>
      <PriceTicker/>
              </div>
  );
};

export default Navbar;