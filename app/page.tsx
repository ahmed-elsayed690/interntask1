"use client";

import { useState } from 'react';

export default function Page() {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar - Hover to expand */}
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
            {[
              "🏠", // Home
              "📢", // Announcements
              "📝", // Assignments
              "💬", // Discussions
              "📊", // Grades
              "📄", // Pages
              "🗂️", // Files
              "📚", // Syllabus
              "✏️", // Quizzes
              "📦", // Modules
              "👥", // Collaborations
              "🖼️", // Lucid (Whiteboard)
            ].map((icon, index) => (
              <div 
                key={index} 
                className={`flex items-center rounded-md cursor-pointer transition-colors ${
                  index === 0 // Home is active
                    ? "bg-[#1a1f3f] text-yellow-400" 
                    : "hover:bg-[#1a1f3f] hover:text-yellow-400"
                } ${isSidebarHovered ? 'py-2 px-3 justify-start' : 'p-3 justify-center'}`}
              >
                <span className={`${isSidebarHovered ? 'mr-3' : ''} text-lg`}>
                  {icon}
                </span>
                {isSidebarHovered && (
                  <span className="truncate">
                    {[
                      "Home",
                      "Announcements",
                      "Assignments",
                      "Discussions",
                      "Grades",
                      "Pages",
                      "Files",
                      "Syllabus",
                      "Quizzes",
                      "Modules",
                      "Collaborations",
                      "Lucid (Whiteboard)",
                    ][index]}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">

        {/* University Banner with Information beside it */}
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
                  <h1 className="text-3xl font-bold text-white">Universities</h1>
                </div>
              </div>
            </div>

            {/* Information for the course on the right */}
            <div className="md:w-1/3">
              {/* Title with blue background */}
              <div className="text-xl font-bold text-white bg-[#0f1431] px-5 py-3.5 rounded-lg mb-5 text-center">
                Information for the course
              </div>
              
              <div className="space-y-4">
                {/* First row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="bg-[#0f1431] text-white px-4 py-2.5 rounded-md font-semibold text-center flex-1">
                    syllabus
                  </div>
                  <div className="bg-[#0f1431] text-white px-4 py-2.5 rounded-md font-semibold text-center flex-1">
                    coffee break
                  </div>
                </div>
                
                {/* Second row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="bg-yellow-500 text-black px-4 py-2.5 rounded-md font-semibold text-center flex-1">
                    Diagnostic
                  </div>
                  <div className="bg-yellow-500 text-black px-4 py-2.5 rounded-md font-semibold text-center flex-1">
                    Poll
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Section */}
        <div className="mb-14">
          <div className="text-2xl font-bold text-[darkblue] mb-7">Modules</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                number: "01", 
                items: ["Reading", "Video", "Self-Assessment"]
              },
              { 
                number: "02", 
                items: ["Reading", "Video", "Self-Assessment"]
              },
              { 
                number: "03", 
                items: ["Reading", "Video", "Self-Assessment", "Activity"]
              },
              { 
                number: "04", 
                items: ["Reading", "Video", "Activity"]
              }
            ].map((module) => (
              <div key={module.number} className="border-[3px] border-[#0f1431] bg-white p-6 rounded-lg relative">
                {/* Module Header - Styled like the image */}
                <div className="absolute -top-0 left-0 bg-[#1a1d2e] text-white px-6 py-2.5 inline-block">
                  <span className="font-bold text-lg tracking-wide">
                    Module <span className="text-[#f4b740]">{module.number}</span>
                  </span>
                </div>

                {/* Spacing for header */}
                <div className="h-8"></div>

                {/* Module Items - Coming from left with blue left border */}
                <div className="border-l-[3px] border-[#0f1431] pl-4 ml-1">
                  <ul className="space-y-3">
                    {module.items.map((item, index) => (
                      <li key={index} className="text-gray-800 flex items-start">
                        <span className="text-[#0f1431] font-bold mr-2 text-lg">&gt;</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-2xl font-bold text-[#0f1431] mb-4 md:mb-0">
              Closing summary
            </div>
            <div className="bg-yellow-500 text-black px-7 py-3.5 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors cursor-pointer inline-flex items-center">
              Final Assessment
              <span className="ml-3">›</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}