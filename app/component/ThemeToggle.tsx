"use client";

import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed bottom-4 end-4 sm:bottom-8 sm:end-8 p-3 sm:p-4 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 z-40 opacity-50">
        <div className="w-5 h-5 sm:w-6 sm:h-6"></div>
      </div>
    );
  }

  return <ThemeToggleButton />;
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 end-4 sm:bottom-8 sm:end-8 p-3 sm:p-4 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl z-40 min-w-[44px] min-h-[44px] flex items-center justify-center"
      aria-label="Toggle theme"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <span className="text-xl sm:text-2xl">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  );
}
