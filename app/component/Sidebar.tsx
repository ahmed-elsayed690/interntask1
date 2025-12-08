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

// ADD THIS: Interface for props
interface SidebarProps {
  activePage: string;
  onPageChange: (pageId: string) => void;
}

export default function Sidebar({ activePage, onPageChange }: SidebarProps) { // ADD PROPS HERE
  const [isSidebarHovered, setIsSidebarHovered] = useState<boolean>(false);
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const menuItems = [
    { icon: Home, label: t('home', 'sidebar'), id: 'home' },
    { icon: Megaphone, label: t('announcements', 'sidebar'), id: 'announcements' },
    { icon: FileText, label: t('assignments', 'sidebar'), id: 'assignments' },
    { icon: MessageSquare, label: t('discussions', 'sidebar'), id: 'discussions' },
    { icon: BarChart3, label: t('grades', 'sidebar'), id: 'grades' },
    { icon: FileStack, label: t('pages', 'sidebar'), id: 'pages' },
    { icon: FolderOpen, label: t('files', 'sidebar'), id: 'files' },
    { icon: BookOpen, label: t('syllabus', 'sidebar'), id: 'syllabus' },
    { icon: ClipboardList, label: t('quizzes', 'sidebar'), id: 'quizzes' }, // Changed to 'quizzes'
    { icon: Package, label: t('modules', 'sidebar'), id: 'modules' },
    { icon: Users, label: t('collaborations', 'sidebar'), id: 'collaborations' },
    { icon: Presentation, label: t('lucid', 'sidebar'), id: 'lucid' },
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
            const isActive = activePage === item.id; // ADD THIS: Check if active
            
            return (
              <div 
                key={index} 
                onClick={() => onPageChange(item.id)} // ADD THIS: Click handler
                className={`flex items-center rounded-md cursor-pointer transition-colors ${
                  isActive
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
