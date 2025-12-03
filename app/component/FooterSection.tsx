export default function FooterSection() {
  return (
    <div className="border-t border-gray-300 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="text-2xl font-bold text-[#0f1431] mb-4 md:mb-0">
          Closing summary
        </div>
        <div className="bg-yellow-500 text-black px-7 py-3.5 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors cursor-pointer inline-flex items-center">
          Final Assessment
          <span className="ml-3">›</span>
        </div>
      </div>
    </div>
  );
}