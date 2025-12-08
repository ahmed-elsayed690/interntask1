// app/component/LanguageContext.tsx
"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, namespace?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Static translations (no require() calls)
const translations = {
  en: {
    sidebar: {
      home: "Home",
      announcements: "Announcements",
      assignments: "Assignments",
      discussions: "Discussions",
      grades: "Grades",
      pages: "Pages",
      files: "Files",
      syllabus: "Syllabus",
      quizzes: "Quizzes",
      modules: "Modules",
      collaborations: "Collaborations",
      lucid: "Lucid (Whiteboard)",
      language: "Language"
    },
    header: {
      universities: "Universities",
      courseInfo: "Information for the course",
      syllabus: "syllabus",
      coffeeBreak: "coffee break",
      diagnostic: "Diagnostic",
      poll: "Poll"
    },
    modules: {
      title: "Modules",
      module: "Module",
      reading: "Reading",
      video: "Video",
      activity: "Activity",
      selfAssessment: "Self-Assessment"
    },
    language: {
      english: "English",
      arabic: "العربية",
      switch: "Switch Language"
    }
  },
  ar: {
    sidebar: {
      home: "الصفحة الرئيسية",
      announcements: "الإعلانات",
      assignments: "المهام",
      discussions: "المناقشات",
      grades: "الدرجات",
      pages: "الصفحات",
      files: "الملفات",
      syllabus: "المنهج",
      quizzes: "الاختبارات",
      modules: "الوحدات",
      collaborations: "التعاون",
      lucid: "لوح التفكير",
      language: "اللغة"
    },
    header: {
      universities: "الجامعات",
      courseInfo: "معلومات المادة",
      syllabus: "المنهج",
      coffeeBreak: "استراحة قهوة",
      diagnostic: "تشخيصي",
      poll: "استطلاع"
    },
    modules: {
      title: "الوحدات",
      module: "الوحدة",
      reading: "القراءة",
      video: "الفيديو",
      activity: "النشاط",
      selfAssessment: "التقييم الذاتي"
    },
    language: {
      english: "English",
      arabic: "العربية",
      switch: "تبديل اللغة"
    }
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string, namespace: string = 'common'): string => {
    try {
      const keys = key.split('.');
      let value: any = translations[language];
      
      // First get the namespace (sidebar, header, etc.)
      if (namespace !== 'common' && value[namespace]) {
        value = value[namespace];
      }
      
      // Then navigate through nested keys
      for (const k of keys) {
        value = value?.[k];
      }
      
      return value || key;
    } catch (error) {
      console.warn(`Translation key not found: ${namespace}.${key}`);
      return key;
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    
    // Update HTML attributes for RTL support
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    // Initialize from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLanguage(savedLang);
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLang;
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}