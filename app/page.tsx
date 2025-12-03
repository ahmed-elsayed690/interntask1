"use client";

import Sidebar from './component/Sidebar';
import HeaderBanner from './component/HeaderBanner';
import ModulesSection from './component/ModulesSection';
import FooterSection from './component/FooterSection';

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">
        {/* University Banner with Information */}
        <HeaderBanner />

        {/* Modules Section */}
        <ModulesSection />

        {/* Footer Section */}
        <FooterSection />
      </main>
    </div>
  );
}