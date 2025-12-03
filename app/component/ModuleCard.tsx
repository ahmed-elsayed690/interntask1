interface ModuleCardProps {
  number: string;
  items: string[];
}

export default function ModuleCard({ number, items }: ModuleCardProps) {
  return (
    <div className="border-[3px] border-[#0f1431] bg-white p-6 rounded-lg relative">
      {/* Module Header - Styled like the image */}
      <div className="absolute -top-0 left-0 bg-[#1a1d2e] text-white px-6 py-2.5 inline-block">
        <span className="font-bold text-lg tracking-wide">
          Module <span className="text-[#f4b740]">{number}</span>
        </span>
      </div>

      {/* Spacing for header */}
      <div className="h-8"></div>

      {/* Module Items - Coming from left with blue left border */}
      <div className="border-l-[3px] border-[#0f1431] pl-4 ml-1">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="text-gray-800 flex items-start">
              <span className="text-[#0f1431] font-bold mr-2 text-lg">&gt;</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}