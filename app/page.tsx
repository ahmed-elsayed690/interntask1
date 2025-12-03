"use client";

import Sidebar from './component/Sidebar';
import HeaderBanner from './component/HeaderBanner';
import ModulesSection from './component/ModulesSection';
import FooterSection from './component/FooterSection';
import ThemeToggle from './component/ThemeToggle';

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-white w-full">
        {/* University Banner with Information */}
        <HeaderBanner />

        {/* Modules Section */}
        <ModulesSection />

        {/* Footer Section */}
        <FooterSection />
        
        {/* Dark Mode Toggle Button */}
        <ThemeToggle />
      </main>
    </div>
  );
}