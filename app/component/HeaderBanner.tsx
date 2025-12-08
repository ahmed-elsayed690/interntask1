"use client";

import { useLanguage } from './LanguageContext'; // Change this import

export default function HeaderBanner() {
  const { t } = useLanguage(); // Change to use our context

  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image on the left */}
        <div className="md:w-2/3">
          <div className="relative">
            <img
              src="/camp.jfif"
              alt="Header"
              className="w-full h-48 md:h-56 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 rounded-b-lg">
              <h1 className="text-3xl font-bold text-white">{t('universities', 'header')}</h1>
            </div>
          </div>
        </div>

        {/* Information for the course on the right */}
        <div className="md:w-1/3">
          {/* Title with blue background */}
          <div className="text-xl font-bold text-white bg-[#0f1431] px-5 py-3.5 rounded-lg mb-5 text-center">
            {t('courseInfo', 'header')}
          </div>
          
          <div className="space-y-4">
            {/* First row */}
            <div className="flex items-center justify-between gap-4">
              <div className="bg-[#0f1431] text-white px-4 py-2.5 rounded-md font-semibold text-center flex-1">
                {t('syllabus', 'header')}
              </div>
              <div className="bg-[#0f1431] text-white px-4 py-2.5 rounded-md font-semibold text-center flex-1">
                {t('coffeeBreak', 'header')}
              </div>
            </div>
            
            {/* Second row */}
            <div className="flex items-center justify-between gap-4">
              <div className="bg-yellow-500 text-black px-4 py-2.5 rounded-md font-semibold text-center flex-1">
                {t('diagnostic', 'header')}
              </div>
              <div className="bg-yellow-500 text-black px-4 py-2.5 rounded-md font-semibold text-center flex-1">
                {t('poll', 'header')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
