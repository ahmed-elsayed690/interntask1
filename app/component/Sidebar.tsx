"use client";

import { useState, useEffect } from 'react';
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
  Presentation,
  Menu,
  X
} from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageContext';

interface SidebarProps {
  activePage: string;
  onPageChange: (pageId: string) => void;
}

export default function Sidebar({ activePage, onPageChange }: SidebarProps) {
  const [isSidebarHovered, setIsSidebarHovered] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { icon: Home, label: t('home', 'sidebar'), id: 'home' },
    { icon: Megaphone, label: t('announcements', 'sidebar'), id: 'announcements' },
    { icon: FileText, label: t('assignments', 'sidebar'), id: 'assignments' },
    { icon: MessageSquare, label: t('discussions', 'sidebar'), id: 'discussions' },
    { icon: BarChart3, label: t('grades', 'sidebar'), id: 'grades' },
    { icon: FileStack, label: t('pages', 'sidebar'), id: 'pages' },
    { icon: FolderOpen, label: t('files', 'sidebar'), id: 'files' },
    { icon: BookOpen, label: t('syllabus', 'sidebar'), id: 'syllabus' },
    { icon: ClipboardList, label: t('quizzes', 'sidebar'), id: 'quizzes' },
    { icon: Package, label: t('modules', 'sidebar'), id: 'modules' },
    { icon: Users, label: t('collaborations', 'sidebar'), id: 'collaborations' },
    { icon: Presentation, label: t('lucid', 'sidebar'), id: 'lucid' },
  ];

  return (
    <>
      {/* Mobile Hamburger Button - Only show on mobile */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-[#0f1431] text-white rounded-lg lg:hidden"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop & Mobile Sidebar */}
      <aside 
        className={`fixed lg:relative top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0
          ${isSidebarHovered ? 'w-72' : 'w-20'} 
          bg-[#0f1431] text-white flex flex-col
          lg:block
        `}
        onMouseEnter={() => !isMobile && setIsSidebarHovered(true)}
        onMouseLeave={() => !isMobile && setIsSidebarHovered(false)}
      >
        <div className={`${isMobileMenuOpen ? 'p-6' : isSidebarHovered ? 'p-6' : 'p-4'} flex flex-col h-full`}>
          {/* Logo/Title */}
          <div className={`${isSidebarHovered || isMobileMenuOpen ? 'text-2xl' : 'text-sm'} font-bold ${isSidebarHovered || isMobileMenuOpen ? 'mb-8' : 'mb-6 text-center'}`}>
            {isSidebarHovered || isMobileMenuOpen ? 'BARÇA INNOVATION HUB' : 'BARÇA'}
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 overflow-y-auto">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activePage === item.id;
              
              return (
                <div 
                  key={index} 
                  onClick={() => {
                    onPageChange(item.id);
                    if (isMobile) setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center rounded-md cursor-pointer transition-colors ${
                    isActive
                      ? "bg-[#1a1f3f] text-yellow-400" 
                      : "hover:bg-[#1a1f3f] hover:text-yellow-400"
                  } ${isSidebarHovered || isMobileMenuOpen ? 'py-2 px-3 justify-start' : 'p-3 justify-center'}`}
                >
                  <IconComponent 
                    className={`${(isSidebarHovered || isMobileMenuOpen) ? (isRTL ? 'ml-3' : 'mr-3') : ''}`}
                    size={20}
                    strokeWidth={2}
                  />
                  {(isSidebarHovered || isMobileMenuOpen) && (
                    <span className="truncate">
                      {item.label}
                    </span>
                  )}
                </div>
              );
            })}
          </nav>
          
          {/* Bottom Section */}
          <div className="mt-auto pt-6 border-t border-gray-700">
            <div className={`flex items-center rounded-md ${
              (isSidebarHovered || isMobileMenuOpen) ? 'justify-start' : 'justify-center'
            }`}>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
