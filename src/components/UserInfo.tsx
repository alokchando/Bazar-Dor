"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const profileImage = user?.image?.replace(/=s\d+-c$/, "=s256-c");
  const image = (
    <Image
      src={profileImage ?? ""}
      alt={user?.name ?? "User profile"}
      width={40}
      height={40}
      referrerPolicy="no-referrer"
      className="h-10 w-10 rounded-full object-cover"
    />
  );

  const onClick = async () => {
    await authClient.signOut();
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 transition hover:border-[#39804D]/40 hover:bg-[#f4f7f2]"
            >
              {profileImage ? (
                image
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39804D] text-lg font-bold uppercase text-white">
                  {user?.name?.trim().charAt(0) || "U"}
                </div>
              )}

              <div className="hidden text-left sm:block">
                <p className="max-w-32 truncate text-sm font-bold text-[#263b2a]">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500">আমার অ্যাকাউন্ট</p>
              </div>

              <span className="text-xs text-gray-500">▼</span>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-64 rounded-2xl  bg-white p-3 shadow-xl"
            >
              <li className="pointer-events-none mb-2">
                <div className="flex items-center gap-3 rounded-xl bg-[#f4f7f2] p-3">
                  {user.image ? (
                    image
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#39804D] text-xl font-bold uppercase text-white">
                      {user.name?.trim().charAt(0)}
                    </div>
                  )}

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-[#263b2a]">
                      {user.name}
                    </p>
                    <p className="truncate text-xs text-gray-500">
                      {user.email}
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="rounded-lg py-3 font-semibold text-[#263b2a] hover:bg-[#f4f7f2]"
                >
                  <span>👤</span>
                  আমার প্রোফাইল
                </Link>
              </li>

              <li>
                <button
                  onClick={onClick}
                  className="rounded-lg py-3 font-semibold text-[#F54927] hover:bg-red-50"
                >
                  <span>↩</span>
                  সাইন আউট
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/sign-in"
            className="rounded-xl border border-[#39804D] px-3 py-2 text-sm font-semibold text-[#39804D] transition hover:bg-[#f0f7f0] sm:px-5"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-xl bg-[#39804D] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2d693e] sm:px-5"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
