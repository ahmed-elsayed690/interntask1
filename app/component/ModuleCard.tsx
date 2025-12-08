"use client";

import { useState } from 'react';
import { useLanguage } from './LanguageContext';

interface ModuleCardProps {
  number: string;
  items: string[];
  language?: 'en' | 'ar';
}

// Simple modal component for reading content
function ReadingModal({ 
  moduleNumber, 
  onClose 
}: { 
  moduleNumber: string; 
  onClose: () => void;
}) {
  const { language } = useLanguage();
  const [currentView, setCurrentView] = useState<'landing' | 'list' | 'content'>('landing');
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  // Module content data
  const moduleContent = {
    "01": {
      en: {
        title: "Module 1. Diversity Management and High Athletic Performance",
        lessons: [
          { 
            id: "intro", 
            title: "Introduction",
            content: "Globalization and access to technology have generated one of the most significant demographic changes in recent years in the world of organizations. The incorporation of various generations operating under different paradigms; competition between different age groups face the challenge of finding common work spaces. The environment of sports communities, regardless of where they may be located, the competitive level, the athletes' genders and ages, are not exempt from this reality. What's more, they are fully involved in it." 
          },
          { 
            id: "unit1-1", 
            title: "Unit 1.1 Psycho-Social Traits of Generational Diversity",
            content: "The time gap separating one generation from the other has undeniably decreased, and the differences in personalities, interests and objectives occupy a more than significant role in various action areas, including sports, both in the training and the competitive level." 
          },
          { 
            id: "unit1-1-1", 
            title: "1.1.1 Baby Boomers (born between 1944 – 1960)",
            content: "Baby Boomers are characterized by their strong work ethic, loyalty, and competitive nature. In sports, they often value discipline and traditional coaching methods." 
          },
          { 
            id: "unit1-1-2", 
            title: "1.1.2 Generation X (born between 1961 – 1980)",
            content: "Generation X brings independence, adaptability, and a balance between work and life. They appreciate direct communication and results-oriented approaches in athletic environments." 
          },
          { 
            id: "unit1-2", 
            title: "Unit 1.2 Generational Diversity in Training Processes",
            content: "Understanding how different generations communicate and learn is essential for effective coaching and team management in modern sports organizations." 
          }
        ]
      },
      ar: {
        title: "الوحدة 1. إدارة التنوع والأداء الرياضي العالي",
        lessons: [
          { 
            id: "intro", 
            title: "مقدمة", 
            content: "لقد أدت العولمة والوصول إلى التكنولوجيا إلى توليد واحد من أهم التغييرات الديموغرافية في السنوات الأخيرة في عالم المنظمات." 
          },
          { 
            id: "unit1-1", 
            title: "الوحدة 1.1 السمات النفسية والاجتماعية للتنوع الجيلي",
            content: "محتوى الوحدة 1.1 بالعربية..." 
          }
        ]
      }
    },
    "02": {
      en: {
        title: "Module 2. Leadership and Team Dynamics in Sports",
        lessons: [
          { 
            id: "intro", 
            title: "Introduction",
            content: "Leadership in sports requires a unique blend of strategic thinking, emotional intelligence, and the ability to inspire diverse groups of athletes. This module explores modern leadership approaches in high-performance athletic environments." 
          },
          { 
            id: "unit2-1", 
            title: "Unit 2.1 Leadership Styles in Sports",
            content: "Different leadership styles impact team performance in various ways. Understanding when to apply democratic, autocratic, or transformational leadership is crucial for success." 
          },
          { 
            id: "unit2-2", 
            title: "Unit 2.2 Building High-Performance Teams",
            content: "Creating cohesive, high-performing teams requires attention to group dynamics, communication patterns, and conflict resolution strategies." 
          },
          { 
            id: "unit2-3", 
            title: "Unit 2.3 Motivating Athletes",
            content: "Motivation techniques vary across individuals and situations. This unit covers intrinsic and extrinsic motivation strategies for peak performance." 
          }
        ]
      },
      ar: {
        title: "الوحدة 2. القيادة وديناميكيات الفريق في الرياضة",
        lessons: [
          { 
            id: "intro", 
            title: "مقدمة", 
            content: "تتطلب القيادة في الرياضة مزيجًا فريدًا من التفكير الاستراتيجي والذكاء العاطفي..." 
          },
          { 
            id: "unit2-1", 
            title: "الوحدة 2.1 أنماط القيادة في الرياضة",
            content: "محتوى الوحدة 2.1 بالعربية..." 
          }
        ]
      }
    },
    "03": {
      en: {
        title: "Module 3. Performance Analysis and Data-Driven Decision Making",
        lessons: [
          { 
            id: "intro", 
            title: "Introduction",
            content: "Modern sports organizations rely heavily on data analytics to gain competitive advantages. This module introduces key concepts in sports analytics and performance measurement." 
          },
          { 
            id: "unit3-1", 
            title: "Unit 3.1 Key Performance Indicators (KPIs)",
            content: "Identifying and tracking the right metrics is essential for performance improvement. Learn how to select and interpret KPIs relevant to your sport and position." 
          },
          { 
            id: "unit3-2", 
            title: "Unit 3.2 Video Analysis Techniques",
            content: "Video analysis has revolutionized coaching and player development. Discover effective methods for breaking down game footage and identifying areas for improvement." 
          },
          { 
            id: "unit3-3", 
            title: "Unit 3.3 Wearable Technology and Biometrics",
            content: "Wearable devices provide real-time data on athlete performance and health. Understand how to leverage this technology for training optimization." 
          },
          { 
            id: "unit3-4", 
            title: "Unit 3.4 Data-Driven Strategy Development",
            content: "Transform raw data into actionable insights. Learn frameworks for using analytics to inform tactical decisions and long-term planning." 
          }
        ]
      },
      ar: {
        title: "الوحدة 3. تحليل الأداء واتخاذ القرارات المستندة إلى البيانات",
        lessons: [
          { 
            id: "intro", 
            title: "مقدمة", 
            content: "تعتمد المنظمات الرياضية الحديثة بشكل كبير على تحليلات البيانات..." 
          },
          { 
            id: "unit3-1", 
            title: "الوحدة 3.1 مؤشرات الأداء الرئيسية",
            content: "محتوى الوحدة 3.1 بالعربية..." 
          }
        ]
      }
    },
    "04": {
      en: {
        title: "Module 4. Sports Psychology and Mental Performance",
        lessons: [
          { 
            id: "intro", 
            title: "Introduction",
            content: "Mental preparation is as important as physical training in achieving peak athletic performance. This module covers essential psychological skills for athletes and coaches." 
          },
          { 
            id: "unit4-1", 
            title: "Unit 4.1 Concentration and Focus",
            content: "Developing the ability to maintain focus under pressure is critical for competitive success. Learn techniques to enhance concentration during training and competition." 
          },
          { 
            id: "unit4-2", 
            title: "Unit 4.2 Managing Pressure and Anxiety",
            content: "All athletes experience pressure. Discover strategies to manage competitive anxiety and perform at your best when it matters most." 
          },
          { 
            id: "unit4-3", 
            title: "Unit 4.3 Goal Setting and Visualization",
            content: "Effective goal setting and mental imagery are powerful tools for performance enhancement. Learn how to apply these techniques systematically." 
          },
          { 
            id: "unit4-4", 
            title: "Unit 4.4 Building Mental Resilience",
            content: "Resilience enables athletes to bounce back from setbacks and maintain performance under adversity. Develop your mental toughness through proven methods." 
          }
        ]
      },
      ar: {
        title: "الوحدة 4. علم النفس الرياضي والأداء العقلي",
        lessons: [
          { 
            id: "intro", 
            title: "مقدمة", 
            content: "الإعداد العقلي لا يقل أهمية عن التدريب البدني في تحقيق الأداء الرياضي الأمثل..." 
          },
          { 
            id: "unit4-1", 
            title: "الوحدة 4.1 التركيز والانتباه",
            content: "محتوى الوحدة 4.1 بالعربية..." 
          }
        ]
      }
    }
  };

  const content = moduleContent[moduleNumber as keyof typeof moduleContent]?.[language];
  const currentLesson = content?.lessons.find(l => l.id === selectedLesson);

  if (!content) return null;

  // Landing view
  if (currentView === 'landing') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-5xl font-bold mb-8">{content.title}</h1>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCurrentView('list')}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
            >
              START READING
            </button>
            <button
              onClick={() => setCurrentView('list')}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900"
            >
              DETAILS ▼
            </button>
          </div>
        </div>
      </div>
    );
  }

  // List view
  if (currentView === 'list') {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-900 hover:text-gray-600"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">BARÇA INNOVATION HUB</h2>
            <p className="text-sm text-gray-600">Universitas</p>
          </div>

          <div className="space-y-4">
            {content.lessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => {
                  setSelectedLesson(lesson.id);
                  setCurrentView('content');
                }}
                className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer rounded-lg"
              >
                <span className="text-gray-400">☰</span>
                <span className="flex-1 text-gray-700">{lesson.title}</span>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Content view with sidebar
  const currentLessonIndex = content.lessons.findIndex(l => l.id === selectedLesson);
  const totalLessons = content.lessons.length;

  return (
    <div className="fixed inset-0 bg-white z-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-gray-900 text-white flex-shrink-0 overflow-y-auto relative">
        {/* Module Header with Background Image */}
        <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 relative flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <h2 className="relative text-lg font-bold text-center leading-tight z-10">
            {content.title}
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="p-4 border-b border-gray-700">
          <div className="text-sm text-gray-400 mb-2">0% COMPLETE</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: "0%" }}></div>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="p-4">
          <nav className="space-y-2">
            {content.lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson.id)}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedLesson === lesson.id
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="text-xs">☰</span>
                <span className="flex-1 text-sm">{lesson.title}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${
                  selectedLesson === lesson.id
                    ? 'border-blue-500'
                    : 'border-gray-600'
                }`}></div>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto relative">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <button
            onClick={() => setCurrentView('list')}
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">Back to lessons</span>
          </button>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Lesson Counter */}
          <div className="text-sm text-gray-500 mb-2">
            Lesson {currentLessonIndex + 1} of {totalLessons}
          </div>

          {/* Lesson Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentLesson?.title}
          </h1>

          {/* Blue Progress Line */}
          <div className="w-20 h-1 bg-blue-500 mb-8"></div>

          {/* Lesson Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>{currentLesson?.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ModuleCard({ number, items }: ModuleCardProps) {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';
  const [showReading, setShowReading] = useState(false);

  const handleItemClick = (item: string) => {
    const readingText = t('reading', 'modules');
    if (item === readingText) {
      setShowReading(true);
    }
  };

  return (
    <>
      <div className="border-[3px] border-[#0f1431] bg-white p-6 rounded-lg relative">
        <div className={`absolute -top-0 ${isRTL ? 'right-0' : 'left-0'} bg-[#1a1d2e] text-white px-6 py-2.5 inline-block`}>
          <span className="font-bold text-lg tracking-wide">
            {t('module', 'modules')} <span className="text-[#f4b740]">{number}</span>
          </span>
        </div>

        <div className="h-8"></div>

        <div className={`${isRTL ? 'border-r-[3px] pr-4 mr-1' : 'border-l-[3px] pl-4 ml-1'} border-[#0f1431]`}>
          <ul className="space-y-3">
            {items.map((item, index) => {
              const readingText = t('reading', 'modules');
              const isClickable = item === readingText;
              
              return (
                <li 
                  key={index} 
                  className={`text-gray-800 flex items-start ${isClickable ? 'cursor-pointer hover:text-[#f4b740] transition-colors' : ''}`}
                  onClick={() => isClickable && handleItemClick(item)}
                >
                  <span className={`text-[#0f1431] font-bold ${isRTL ? 'ml-2' : 'mr-2'} text-lg`}>
                    {isRTL ? '<' : '>'}
                  </span>
                  <span className={`${isClickable ? 'hover:underline' : ''}`}>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {showReading && (
        <ReadingModal 
          moduleNumber={number} 
          onClose={() => setShowReading(false)} 
        />
      )}
    </>
  );
}
