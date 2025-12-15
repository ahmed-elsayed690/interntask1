"use client";

import { useState, createContext, useContext } from 'react';
import { ChevronLeft, ChevronRight, X, Menu } from 'lucide-react';

// Create a simple language context
const LanguageContext = createContext<{ language: 'en' | 'ar' }>({ language: 'en' });
const useLanguage = () => useContext(LanguageContext);

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

// Video data for each module
const moduleVideos = {
  "01": {
    en: {
      title: "Module 1 Videos",
      videos: [
        { 
          id: "intro", 
          title: "Introduction to Diversity Management",
          youtubeId: "dQw4w9WgXcQ",
          description: "An overview of diversity management concepts in sports organizations." 
        },
        { 
          id: "gen-diversity", 
          title: "Generational Diversity in Sports",
          youtubeId: "9bZkp7q19f0",
          description: "Understanding different generations in athletic environments." 
        },
        { 
          id: "case-study", 
          title: "Case Study: FC Barcelona",
          youtubeId: "L_jWHffIx5E",
          description: "How FC Barcelona manages diverse teams for high performance." 
        }
      ]
    },
    ar: {
      title: "مقاطع فيديو الوحدة 1",
      videos: [
        { 
          id: "intro", 
          title: "مقدمة في إدارة التنوع",
          youtubeId: "dQw4w9WgXcQ",
          description: "نظرة عامة على مفاهيم إدارة التنوع في المنظمات الرياضية." 
        },
        { 
          id: "gen-diversity", 
          title: "التنوع الجيلي في الرياضة",
          youtubeId: "9bZkp7q19f0",
          description: "فهم الأجيال المختلفة في البيئات الرياضية." 
        },
        { 
          id: "case-study", 
          title: "دراسة حالة: نادي برشلونة",
          youtubeId: "L_jWHffIx5E",
          description: "كيف يدير برشلونة الفرق المتنوعة لتحقيق الأداء العالي." 
        }
      ]
    }
  },
  "02": {
    en: {
      title: "Module 2 Videos",
      videos: [
        { 
          id: "leadership-intro", 
          title: "Leadership in Modern Sports",
          youtubeId: "oC_Gj4DEnrE",
          description: "Exploring contemporary leadership approaches." 
        },
        { 
          id: "team-dynamics", 
          title: "Team Dynamics Workshop",
          youtubeId: "Fdf5aTYRW0E",
          description: "Practical exercises for building team cohesion." 
        },
        { 
          id: "motivation", 
          title: "Motivational Techniques",
          youtubeId: "sGbxmsDFVnE",
          description: "Strategies for motivating diverse athlete groups." 
        }
      ]
    },
    ar: {
      title: "مقاطع فيديو الوحدة 2",
      videos: [
        { 
          id: "leadership-intro", 
          title: "القيادة في الرياضة الحديثة",
          youtubeId: "oC_Gj4DEnrE",
          description: "استكشاف نهج القيادة المعاصرة." 
        },
        { 
          id: "team-dynamics", 
          title: "ورشة عمل ديناميكيات الفريق",
          youtubeId: "Fdf5aTYRW0E",
          description: "تمارين عملية لبناء التماسك الجماعي." 
        },
        { 
          id: "motivation", 
          title: "تقنيات التحفيز",
          youtubeId: "sGbxmsDFVnE",
          description: "استراتيجيات لتحفيز مجموعات الرياضيين المتنوعة." 
        }
      ]
    }
  },
  "03": {
    en: {
      title: "Module 3 Videos",
      videos: [
        { 
          id: "analytics-intro", 
          title: "Introduction to Sports Analytics",
          youtubeId: "BBJa32lCaaY",
          description: "The role of data in modern sports management." 
        },
        { 
          id: "video-analysis", 
          title: "Video Analysis Techniques",
          youtubeId: "T7eWQ0qeDDU",
          description: "How to effectively analyze game footage." 
        },
        { 
          id: "wearable-tech", 
          title: "Wearable Technology Demo",
          youtubeId: "M4cg3Hx5Lz4",
          description: "Demonstration of biometric tracking devices." 
        }
      ]
    },
    ar: {
      title: "مقاطع فيديو الوحدة 3",
      videos: [
        { 
          id: "analytics-intro", 
          title: "مقدمة في التحليلات الرياضية",
          youtubeId: "BBJa32lCaaY",
          description: "دور البيانات في الإدارة الرياضية الحديثة." 
        },
        { 
          id: "video-analysis", 
          title: "تقنيات تحليل الفيديو",
          youtubeId: "T7eWQ0qeDDU",
          description: "كيفية تحليل لقطات المباراة بفعالية." 
        },
        { 
          id: "wearable-tech", 
          title: "عرض تجريبي للتكنولوجيا القابلة للارتداء",
          youtubeId: "M4cg3Hx5Lz4",
          description: "عرض توضيحي لأجهزة التتبع البيومترية." 
        }
      ]
    }
  },
  "04": {
    en: {
      title: "Module 4 Videos",
      videos: [
        { 
          id: "psychology-intro", 
          title: "Sports Psychology Basics",
          youtubeId: "yPYZpwSpKmA",
          description: "Fundamental psychological principles for athletes." 
        },
        { 
          id: "mental-toughness", 
          title: "Building Mental Toughness",
          youtubeId: "n9h0XzK-0nY",
          description: "Exercises to develop psychological resilience." 
        },
        { 
          id: "visualization", 
          title: "Visualization Techniques",
          youtubeId: "Oo8wS6I6r5g",
          description: "How to use mental imagery for performance enhancement." 
        }
      ]
    },
    ar: {
      title: "مقاطع فيديو الوحدة 4",
      videos: [
        { 
          id: "psychology-intro", 
          title: "أساسيات علم النفس الرياضي",
          youtubeId: "yPYZpwSpKmA",
          description: "المبادئ النفسية الأساسية للرياضيين." 
        },
        { 
          id: "mental-toughness", 
          title: "بناء الصلابة النفسية",
          youtubeId: "n9h0XzK-0nY",
          description: "تمارين لتطوير المرونة النفسية." 
        },
        { 
          id: "visualization", 
          title: "تقنيات التصور",
          youtubeId: "Oo8wS6I6r5g",
          description: "كيفية استخدام الصور الذهنية لتحسين الأداء." 
        }
      ]
    }
  }
};

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
  const [currentSection, setCurrentSection] = useState<'reading' | 'video' | 'self-assessment'>('reading');
  const [showSidebar, setShowSidebar] = useState(false);

  const content = moduleContent[moduleNumber as keyof typeof moduleContent]?.[language];
  const currentLesson = content?.lessons.find(l => l.id === selectedLesson);

  // Navigation functions
  const handleNext = () => {
    if (currentSection === 'reading') {
      setCurrentSection('video');
    } else if (currentSection === 'video') {
      setCurrentSection('self-assessment');
    }
  };

  const handlePrevious = () => {
    if (currentSection === 'video') {
      setCurrentSection('reading');
    } else if (currentSection === 'self-assessment') {
      setCurrentSection('video');
    }
  };

  if (!content) return null;

  // Landing view
  if (currentView === 'landing') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
        >
          <X className="w-8 h-8" />
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
      <div className="fixed inset-0 bg-white z-[100] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-900 hover:text-gray-600"
        >
          <X className="w-8 h-8" />
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

  // Content view with sidebar and navigation
  const currentLessonIndex = content.lessons.findIndex(l => l.id === selectedLesson);
  const totalLessons = content.lessons.length;

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col lg:flex-row">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setShowSidebar(!showSidebar)} 
        className="lg:hidden fixed top-4 left-4 z-30 bg-gray-900 text-white p-2 rounded-lg shadow-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div className={`${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative w-80 bg-gray-900 text-white flex-shrink-0 overflow-y-auto h-full transition-transform duration-300 z-20`}>
        {/* Mobile close button */}
        <button 
          onClick={() => setShowSidebar(false)} 
          className="lg:hidden absolute top-4 right-4 text-white"
        >
          <X className="w-6 h-6" />
        </button>

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
            {content.lessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => {
                  setSelectedLesson(lesson.id);
                  setShowSidebar(false);
                }}
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

      {/* Overlay for mobile */}
      {showSidebar && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10" 
          onClick={() => setShowSidebar(false)} 
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto relative flex flex-col">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <button
            onClick={() => setCurrentView('list')}
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Back to lessons</span>
          </button>

          {/* Section Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 'reading'}
              className="text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm">Previous</span>
            </button>
            
            <div className="text-sm text-gray-600 px-4 py-1 bg-gray-100 rounded">
              {currentSection === 'reading' && 'Reading'}
              {currentSection === 'video' && 'Video'}
              {currentSection === 'self-assessment' && 'Self-Assessment'}
            </div>

            <button
              onClick={handleNext}
              disabled={currentSection === 'self-assessment'}
              className="text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
            >
              <span className="text-sm">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-4xl mx-auto px-8 py-12 w-full">
          {currentSection === 'reading' && (
            <>
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
            </>
          )}

          {currentSection === 'video' && (
            <div className="text-center text-gray-600">
              <h2 className="text-2xl font-bold mb-4">Video Section</h2>
              <p>Video content will be displayed here</p>
            </div>
          )}

          {currentSection === 'self-assessment' && (
            <div className="text-center text-gray-600">
              <h2 className="text-2xl font-bold mb-4">Self-Assessment</h2>
              <p>Self-assessment content will be displayed here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Video Modal Component with toggle for 3 videos
function VideoModal({ 
  moduleNumber, 
  onClose 
}: { 
  moduleNumber: string; 
  onClose: () => void;
}) {
  const { language } = useLanguage();
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [currentSection, setCurrentSection] = useState<'video' | 'reading' | 'self-assessment'>('video');
  const [showSidebar, setShowSidebar] = useState(false);

  const content = moduleVideos[moduleNumber as keyof typeof moduleVideos]?.[language];
  const currentVideo = content?.videos[currentVideoIndex];

  // Navigation functions
  const handleNext = () => {
    if (currentSection === 'reading') {
      setCurrentSection('video');
    } else if (currentSection === 'video') {
      setCurrentSection('self-assessment');
    }
  };

  const handlePrevious = () => {
    if (currentSection === 'video') {
      setCurrentSection('reading');
    } else if (currentSection === 'self-assessment') {
      setCurrentSection('video');
    }
  };

  if (!content) return null;

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col lg:flex-row">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setShowSidebar(!showSidebar)} 
        className="lg:hidden fixed top-4 left-4 z-30 bg-gray-900 text-white p-2 rounded-lg shadow-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar with video thumbnails */}
      <div className={`${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative w-80 bg-gray-900 text-white flex-shrink-0 overflow-y-auto h-full transition-transform duration-300 z-20`}>
        {/* Mobile close button */}
        <button 
          onClick={() => setShowSidebar(false)} 
          className="lg:hidden absolute top-4 right-4 text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Module Header */}
        <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 relative flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <h2 className="relative text-lg font-bold text-center leading-tight z-10">
            {content.title}
          </h2>
        </div>

        {/* Video List */}
        <div className="p-4">
          <h3 className="text-sm text-gray-400 mb-3 uppercase">Videos</h3>
          <div className="space-y-3">
            {content.videos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => {
                  setCurrentVideoIndex(index);
                  setShowSidebar(false);
                }}
                className={`cursor-pointer rounded-lg overflow-hidden transition-all ${
                  currentVideoIndex === index
                    ? 'ring-2 ring-blue-500'
                    : 'hover:opacity-80'
                }`}
              >
                <div className="relative h-32 bg-gray-800">
                  <img 
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-semibold mb-1">{video.title}</h4>
                  <p className="text-xs text-gray-400">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {showSidebar && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10" 
          onClick={() => setShowSidebar(false)} 
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto relative flex flex-col">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Section Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 'video'}
              className="text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm">Previous</span>
            </button>
            
            <div className="text-sm text-gray-600 px-4 py-1 bg-gray-100 rounded">
              {currentSection === 'reading' && 'Reading'}
              {currentSection === 'video' && 'Video'}
              {currentSection === 'self-assessment' && 'Self-Assessment'}
            </div>

            <button
              onClick={handleNext}
              disabled={currentSection === 'self-assessment'}
              className="text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
            >
              <span className="text-sm">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-4xl mx-auto px-8 py-12 w-full">
          {currentSection === 'video' && currentVideo && (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {currentVideo.title}
              </h1>
              <div className="w-20 h-1 bg-blue-500 mb-8"></div>
              
              <div className="aspect-video w-full bg-black rounded-lg overflow-hidden mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}`}
                  title={currentVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>{currentVideo.description}</p>
              </div>
            </>
          )}

          {currentSection === 'reading' && (
            <div className="text-center text-gray-600">
              <h2 className="text-2xl font-bold mb-4">Reading Section</h2>
              <p>Reading content will be displayed here</p>
            </div>
          )}

          {currentSection === 'self-assessment' && (
            <div className="text-center text-gray-600">
              <h2 className="text-2xl font-bold mb-4">Self-Assessment</h2>
              <p>Self-assessment content will be displayed here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Main ModuleCard Component
function ModuleCard({ number, items = [], language = 'en' }: ModuleCardProps) {
  const [showReadingModal, setShowReadingModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <LanguageContext.Provider value={{ language }}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Module {number}</h3>
        </div>
        
        {items && items.length > 0 && (
          <ul className="space-y-2 mb-4">
            {items.map((item, index) => (
              <li key={index} className="text-gray-600 text-sm flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => setShowReadingModal(true)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
          >
            Read
          </button>
          <button
            onClick={() => setShowVideoModal(true)}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm font-semibold"
          >
            Watch
          </button>
        </div>

        {showReadingModal && (
          <ReadingModal 
            moduleNumber={number} 
            onClose={() => setShowReadingModal(false)} 
          />
        )}

        {showVideoModal && (
          <VideoModal 
            moduleNumber={number} 
            onClose={() => setShowVideoModal(false)} 
          />
        )}
      </div>
    </LanguageContext.Provider>
  );
}

export default ModuleCard;
