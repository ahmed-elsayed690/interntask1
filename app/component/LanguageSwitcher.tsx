// components/LanguageSwitcher.tsx
"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md 
               bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 
               transition-colors duration-200"
    >
      <span className="text-lg">
        {language === 'en' ? '🇦🇪' : '🇬🇧'}
      </span>
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}