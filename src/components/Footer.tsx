export default function FooterBar() {
  return (
    <footer className="w-full bg-[#f8f9fa] border-t border-gray-200 text-xs text-gray-700 py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div className="font-medium text-gray-800">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </div>

        <div className="text-gray-500 font-normal">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </div>
      </div>
    </footer>
  );
}
