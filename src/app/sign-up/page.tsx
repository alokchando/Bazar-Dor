"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const Signup = () => {
  const gSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const gitSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      ...user,
    });
    if (error) {
      toast.error("Sign up failed!");
      return;
    }
    if (data) {
      toast.success("সফলভাবে অ্যাকাউন্ট তৈরি হয়েছে!");
      redirect("/");
    }
  };
  return (
    <div className="min-h-screen bg-[#f4f7f2] flex flex-col items-center justify-center p-4 font-sans text-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="text-sm text-gray-500">
          বিনামূল্যে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-[#e5ebd9] p-8 sm:p-10">
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
              নাম
            </label>
            <input
              type="text"
              name="name"
              placeholder="যেমন: রহিম উদ্দিন"
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
              ইমেইল
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              name="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="আবার লিখুন"
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 px-4 bg-[#0a8239] hover:bg-[#076d30] text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <span className="relative px-3 bg-white text-xs text-gray-400 uppercase tracking-widest">
            অথবা
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={gSignIn}
            type="button"
            className="flex items-center justify-center px-3 py-3 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl text-xs sm:text-sm font-medium text-gray-700 transition-all"
          >
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            onClick={gitSignIn}
            type="button"
            className="flex items-center justify-center px-3 py-3 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl text-xs sm:text-sm font-medium text-gray-700 transition-all"
          >
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        <div className="mt-6 text-center text-xs sm:text-sm text-gray-500">
          অ্যাকাউন্ট আছে?{" "}
          <a
            href="/sign-in"
            className="text-[#0a8239] font-medium hover:underline"
          >
            সাইন ইন করুন
          </a>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/"
          className="text-xs sm:text-sm text-gray-500 hover:text-gray-800 transition-colors font-medium"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default Signup;
