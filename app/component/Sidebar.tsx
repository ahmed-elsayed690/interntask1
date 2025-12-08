"use client";

import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageContext'; // Change this import

export default function Sidebar() {
  const [isSidebarHovered, setIsSidebarHovered] = useState<boolean>(false);
  const { t } = useLanguage(); // Change to use our context

  const menuItems = [
    { icon: "🏠", label: t('home', 'sidebar'), active: true },
    { icon: "📢", label: t('announcements', 'sidebar'), active: false },
    { icon: "📝", label: t('assignments', 'sidebar'), active: false },
    { icon: "💬", label: t('discussions', 'sidebar'), active: false },
    { icon: "📊", label: t('grades', 'sidebar'), active: false },
    { icon: "📄", label: t('pages', 'sidebar'), active: false },
    { icon: "🗂️", label: t('files', 'sidebar'), active: false },
    { icon: "📚", label: t('syllabus', 'sidebar'), active: false },
    { icon: "✏️", label: t('quizzes', 'sidebar'), active: false },
    { icon: "📦", label: t('modules', 'sidebar'), active: false },
    { icon: "👥", label: t('collaborations', 'sidebar'), active: false },
    { icon: "🖼️", label: t('lucid', 'sidebar'), active: false },
  ];

  return (
    <aside 
      className={`${isSidebarHovered ? 'w-72' : 'w-20'} bg-[#0f1431] text-white transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setIsSidebarHovered(true)}
      onMouseLeave={() => setIsSidebarHovered(false)}
    >
      <div className={`${isSidebarHovered ? 'p-6' : 'p-4'} space-y-6`}>
        {/* Logo/Title */}
        <div className={`${isSidebarHovered ? 'text-2xl' : 'text-sm'} font-bold ${isSidebarHovered ? 'mb-8' : 'mb-6 text-center'}`}>
          {isSidebarHovered ? 'BARÇA INNOVATION HUB' : 'BARÇA'}
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center rounded-md cursor-pointer transition-colors ${
                item.active
                  ? "bg-[#1a1f3f] text-yellow-400" 
                  : "hover:bg-[#1a1f3f] hover:text-yellow-400"
              } ${isSidebarHovered ? 'py-2 px-3 justify-start' : 'p-3 justify-center'}`}
            >
              <span className={`${isSidebarHovered ? 'mr-3' : ''} text-lg`}>
                {item.icon}
              </span>
              {isSidebarHovered && (
                <span className="truncate">
                  {item.label}
                </span>
              )}
            </div>
          ))}
          
          {/* Language Switcher */}
          <div className={`flex items-center rounded-md cursor-pointer transition-colors ${
            isSidebarHovered ? 'py-2 px-3 justify-start mt-8' : 'p-3 justify-center mt-8'
          }`}>
            {isSidebarHovered ? (
              <div className="w-full">
                <LanguageSwitcher />
              </div>
            ) : (
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
}
