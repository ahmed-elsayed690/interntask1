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
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md 
                     bg-gray-100 dark:bg-gray-800 w-32">
          <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="flex-1 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
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
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md 
               bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 
               transition-colors duration-200 w-full justify-center"
      aria-label="Toggle theme"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <span className="text-lg">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  );
}
