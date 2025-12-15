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
import ThemeToggle from './ThemeToggle'; // Add this import
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
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isMobile]);

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
      {/* Mobile Top Bar - Only visible on mobile */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#1e293b] shadow-md lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Barcelona Logo on the left */}
          <div className="w-10 h-10 flex-shrink-0">
            <img 
              src="/favicon.ico" 
              alt="Barcelona" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Center buttons */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Hamburger Menu Button on the right */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-[#0f1431] text-white rounded-lg hover:bg-[#1a1f3f] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay with semi-transparent background */}
      {isMobileMenuOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:relative 
          top-0 ${isRTL ? 'right-0' : 'left-0'}
          h-full z-50 
          transform transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : (isRTL ? 'translate-x-full' : '-translate-x-full')}
          lg:translate-x-0
          ${isSidebarHovered && !isMobile ? 'w-72' : isMobile && isMobileMenuOpen ? 'w-80 max-w-[85vw]' : 'w-20'} 
          bg-[#0f1431] text-white flex flex-col
          shadow-2xl lg:shadow-none
        `}
        onMouseEnter={() => !isMobile && setIsSidebarHovered(true)}
        onMouseLeave={() => !isMobile && setIsSidebarHovered(false)}
      >
        <div className={`${(isMobileMenuOpen && isMobile) || isSidebarHovered ? 'p-6' : 'p-4'} flex flex-col h-full overflow-hidden`}>
          {/* Logo/Title */}
          <div className={`
            ${(isSidebarHovered && !isMobile) || (isMobileMenuOpen && isMobile) ? 'text-xl sm:text-2xl mb-8' : 'text-xs mb-6 text-center'} 
            font-bold transition-all duration-300
          `}>
            {(isSidebarHovered && !isMobile) || (isMobileMenuOpen && isMobile) ? 'BARÇA INNOVATION HUB' : 'BARÇA'}
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activePage === item.id;
              const isExpanded = (isSidebarHovered && !isMobile) || (isMobileMenuOpen && isMobile);
              
              return (
                <button 
                  key={index} 
                  onClick={() => {
                    onPageChange(item.id);
                    if (isMobile) setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center rounded-lg cursor-pointer 
                    transition-all duration-200
                    ${isActive
                      ? "bg-[#1a1f3f] text-yellow-400 shadow-md" 
                      : "hover:bg-[#1a1f3f] hover:text-yellow-400"
                    } 
                    ${isExpanded ? 'py-3 px-4 justify-start' : 'p-3 justify-center'}
                  `}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <IconComponent 
                    className={`flex-shrink-0 ${isExpanded ? (isRTL ? 'ml-3' : 'mr-3') : ''}`}
                    size={22}
                    strokeWidth={2}
                  />
                  {isExpanded && (
                    <span className="truncate font-medium text-base">
                      {item.label}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
          
          {/* Bottom Section - Language Switcher and Theme Toggle (Desktop only) */}
          <div className="mt-auto pt-6 border-t border-gray-700 hidden lg:block">
            <div className={`flex flex-col gap-3 ${(isSidebarHovered && !isMobile) ? 'items-start' : 'items-center'}`}>
              <div className={`flex items-center ${(isSidebarHovered && !isMobile) ? 'justify-start' : 'justify-center'} w-full`}>
                <LanguageSwitcher />
              </div>
              <div className={`flex items-center ${(isSidebarHovered && !isMobile) ? 'justify-start' : 'justify-center'} w-full`}>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
