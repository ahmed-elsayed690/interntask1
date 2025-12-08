"use client";

import { useLanguage } from './LanguageContext';

interface ModuleCardProps {
  number: string;
  items: string[];
  language?: 'en' | 'ar';
}

export default function ModuleCard({ number, items }: ModuleCardProps) {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="border-[3px] border-[#0f1431] bg-white p-6 rounded-lg relative">
      {/* Module Header - Styled like the image */}
      <div className={`absolute -top-0 ${isRTL ? 'right-0' : 'left-0'} bg-[#1a1d2e] text-white px-6 py-2.5 inline-block`}>
        <span className="font-bold text-lg tracking-wide">
          {t('module', 'modules')} <span className="text-[#f4b740]">{number}</span>
        </span>
      </div>

      {/* Spacing for header */}
      <div className="h-8"></div>

      {/* Module Items - Coming from left/right with blue border */}
      <div className={`${isRTL ? 'border-r-[3px] pr-4 mr-1' : 'border-l-[3px] pl-4 ml-1'} border-[#0f1431]`}>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="text-gray-800 flex items-start">
              <span className={`text-[#0f1431] font-bold ${isRTL ? 'ml-2' : 'mr-2'} text-lg`}>
                {isRTL ? '<' : '>'}
              </span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
