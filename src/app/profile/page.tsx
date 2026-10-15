"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleUpdateName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (!name.trim()) {
      toast.error("নাম লিখুন");
      return;
    }
    const { error } = await authClient.updateUser({
      name: name.trim(),
    });

    if (error) {
      toast.error("নাম আপডেট করা যায়নি");
      return;
    }

    toast.success("নাম সফলভাবে আপডেট হয়েছে!");
  };

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

  return (
    <main className="min-h-screen bg-[#F4F7F2] px-4 py-10 text-neutral-800 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-7">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            আমার প্রোফাইল
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <section className="rounded-3xl border border-[#E3EAE1] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            {user?.image ? (
              image
            ) : (
              <div className="flex shrink-0 items-center justify-center bg-[#39804D] text-4xl font-bold uppercase text-white h-10 w-10 rounded-full object-cover">
                {user?.name?.trim().charAt(0)}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <h2 className="break-words text-xl font-bold text-neutral-900">
                {user?.name}
              </h2>
              <p className="mt-2 break-all text-sm text-neutral-500">
                {user?.email}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/sign-in");
                    },
                  },
                })
              }
              className="rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              সাইন আউট →
            </button>
          </div>
        </section>

        <section className="rounded-3xl border border-[#E3EAE1] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-neutral-900">তথ্য</h2>
            <p className="mt-2 text-sm text-neutral-500">
              আপনার নামের তথ্য এখানে আপডেট করুন।
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleUpdateName}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-neutral-700"
              >
                নাম
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="w-full rounded-xl border border-[#DDE5DA] bg-[#F9FBF8] px-4 py-3.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#39804D] focus:ring-2 focus:ring-[#39804D]/10"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#39804D] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#2F6B40] active:scale-[0.99]"
            >
              আপডেট
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Page;
