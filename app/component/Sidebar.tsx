"use client";

import { useState } from 'react';
import { 
  Home, 
  Megaphone, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  FileStack, 
  FolderOpen, 
  BookOpen, 
  ClipboardList, 
  Package, 
  Users, 
  Presentation 
} from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageContext';

export default function Sidebar() {
  const [isSidebarHovered, setIsSidebarHovered] = useState<boolean>(false);
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const menuItems = [
    { icon: Home, label: t('home', 'sidebar'), active: true },
    { icon: Megaphone, label: t('announcements', 'sidebar'), active: false },
    { icon: FileText, label: t('assignments', 'sidebar'), active: false },
    { icon: MessageSquare, label: t('discussions', 'sidebar'), active: false },
    { icon: BarChart3, label: t('grades', 'sidebar'), active: false },
    { icon: FileStack, label: t('pages', 'sidebar'), active: false },
    { icon: FolderOpen, label: t('files', 'sidebar'), active: false },
    { icon: BookOpen, label: t('syllabus', 'sidebar'), active: false },
    { icon: ClipboardList, label: t('quizzes', 'sidebar'), active: false },
    { icon: Package, label: t('modules', 'sidebar'), active: false },
    { icon: Users, label: t('collaborations', 'sidebar'), active: false },
    { icon: Presentation, label: t('lucid', 'sidebar'), active: false },
  ];

  return (
    <aside 
      className={`${isSidebarHovered ? 'w-72' : 'w-20'} bg-[#0f1431] text-white transition-all duration-300 ease-in-out flex flex-col`}
      onMouseEnter={() => setIsSidebarHovered(true)}
      onMouseLeave={() => setIsSidebarHovered(false)}
    >
      <div className={`${isSidebarHovered ? 'p-6' : 'p-4'} flex flex-col h-full`}>
        {/* Logo/Title */}
        <div className={`${isSidebarHovered ? 'text-2xl' : 'text-sm'} font-bold ${isSidebarHovered ? 'mb-8' : 'mb-6 text-center'}`}>
          {isSidebarHovered ? 'BARÇA INNOVATION HUB' : 'BARÇA'}
        </div>

        {/* Navigation - Takes up remaining space */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className={`flex items-center rounded-md cursor-pointer transition-colors ${
                  item.active
                    ? "bg-[#1a1f3f] text-yellow-400" 
                    : "hover:bg-[#1a1f3f] hover:text-yellow-400"
                } ${isSidebarHovered ? 'py-2 px-3 justify-start' : 'p-3 justify-center'}`}
              >
                <IconComponent 
                  className={`${isSidebarHovered ? (isRTL ? 'ml-3' : 'mr-3') : ''}`}
                  size={20}
                  strokeWidth={2}
                />
                {isSidebarHovered && (
                  <span className="truncate">
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </nav>
        
        {/* Bottom Section - Language Switcher */}
        <div className="mt-auto pt-6 border-t border-gray-700">
          <div className={`flex items-center rounded-md ${
            isSidebarHovered ? 'justify-start' : 'justify-center'
          }`}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </aside>
  );
}
