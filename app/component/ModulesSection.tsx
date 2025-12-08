"use client";

import ModuleCard from './ModuleCard';
import { useLanguage } from './LanguageContext';

interface ModuleData {
  number: string;
  items: string[];
}

export default function ModulesSection() {
  const { t, language } = useLanguage();

  const modules: ModuleData[] = [
    { 
      number: "01", 
      items: [
        t('reading', 'modules'),
        t('video', 'modules'),
        t('selfAssessment', 'modules')
      ]
    },
    { 
      number: "02", 
      items: [
        t('reading', 'modules'),
        t('video', 'modules'),
        t('selfAssessment', 'modules')
      ]
    },
    { 
      number: "03", 
      items: [
        t('reading', 'modules'),
        t('video', 'modules'),
        t('selfAssessment', 'modules'),
        t('activity', 'modules')
      ]
    },
    { 
      number: "04", 
      items: [
        t('reading', 'modules'),
        t('video', 'modules'),
        t('activity', 'modules')
      ]
    }
  ];

  return (
    <div className="mb-14">
      <div className="text-2xl font-bold text-[darkblue] mb-7">
        {t('title', 'modules')}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {modules.map((module) => (
          <ModuleCard 
            key={module.number} 
            number={module.number} 
            items={module.items}
            language={language}
          />
        ))}
      </div>
    </div>
  );
}
