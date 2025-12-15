// app/page.tsx
"use client";

import { useState } from 'react';
import Sidebar from './component/Sidebar';
import HeaderBanner from './component/HeaderBanner';
import ModulesSection from './component/ModulesSection';
import FooterSection from './component/FooterSection';
import ThemeToggle from './component/ThemeToggle';
import QuizzesPage from './component/QuizzesPage';

export default function Page() {
  const [activePage, setActivePage] = useState<string>('home');

  const renderContent = () => {
    switch (activePage) {
      case 'quizzes':
        return <QuizzesPage />;
      case 'home':
      default:
        return (
          <>
            <HeaderBanner />
            <ModulesSection />
            <FooterSection />
            <ThemeToggle />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <Sidebar 
        activePage={activePage} 
        onPageChange={setActivePage} 
      />

      {/* Main content with mobile top bar spacing */}
      <main className="flex-1 p-4 sm:p-5 md:p-6 lg:p-8 bg-white w-full overflow-x-hidden min-h-screen pt-20 lg:pt-4">
        {renderContent()}
      </main>
    </div>
  );
}
