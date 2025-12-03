"use client";

import { useState } from 'react';

interface MenuItem {
  icon: string;
  label: string;
  active: boolean;
}

export default function Sidebar() {
  const [isSidebarHovered, setIsSidebarHovered] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { icon: "🏠", label: "Home", active: true },
    { icon: "📢", label: "Announcements", active: false },
    { icon: "📝", label: "Assignments", active: false },
    { icon: "💬", label: "Discussions", active: false },
    { icon: "📊", label: "Grades", active: false },
    { icon: "📄", label: "Pages", active: false },
    { icon: "🗂️", label: "Files", active: false },
    { icon: "📚", label: "Syllabus", active: false },
    { icon: "✏️", label: "Quizzes", active: false },
    { icon: "📦", label: "Modules", active: false },
    { icon: "👥", label: "Collaborations", active: false },
    { icon: "🖼️", label: "Lucid (Whiteboard)", active: false },
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
        </nav>
      </div>
    </aside>
  );
}