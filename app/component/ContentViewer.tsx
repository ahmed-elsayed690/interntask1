"use client";

import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ContentViewerProps {
  moduleNumber: string;
  contentType: 'reading' | 'video';
  onClose: () => void;
}

export default function ContentViewer({ moduleNumber, contentType, onClose }: ContentViewerProps) {
  const { language } = useLanguage();
  const [currentSection, setCurrentSection] = useState<'reading' | 'video' | 'self-assessment' | 'activity'>('reading');
  const [selectedLesson, setSelectedLesson] = useState<string>('intro');
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  // Module content data
  const moduleContent = {
    "01": {
      en: {
        title: "Module 1. Diversity Management and High Athletic Performance",
        sections: {
          reading: [
            { 
              id: "intro", 
              title: "Introduction",
              content: "Globalization and access to technology have generated one of the most significant demographic changes in recent years in the world of organizations. The incorporation of various generations operating under different paradigms; competition between different age groups face the challenge of finding common work spaces. The environment of sports communities, regardless of where they may be located, the competitive level, the athletes' genders and ages, are not exempt from this reality. What's more, they are fully involved in it." 
            },
            { 
              id: "unit1-1", 
              title: "Unit 1.1 Psycho-Social Traits of Generational Diversity",
              content: "The time gap separating one generation from the other has undeniably decreased, and the differences in personalities, interests and objectives occupy a more than significant role in shaping the modern workplace. Understanding these psycho-social traits is essential for effective team management and collaboration across different age groups."
            }
          ]
        }
      }
    }
  };

  const currentModule = moduleContent[moduleNumber as keyof typeof moduleContent];
  const isRTL = language === 'ar';

  const handleNext = () => {
    // Implementation for next button
  };

  const handlePrevious = () => {
    // Implementation for previous button
  };

  const getCurrentContent = () => {
    if (!currentModule) return { title: '', content: '' };
    
    const langData = currentModule[language] || currentModule.en;
    const section = langData.sections[currentSection];
    const lesson = section?.find((item: any) => item.id === selectedLesson);
    
    return lesson || { title: '', content: 'Content not available' };
  };

  const currentContent = getCurrentContent();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {currentModule?.[language]?.title || currentModule?.en?.title || `Module ${moduleNumber}`}
            </h2>
            <p className="text-gray-600 mt-1">
              {contentType === 'reading' ? 'Reading Material' : 'Video Lesson'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">{currentContent.title}</h3>
            <p className="text-gray-700 leading-relaxed">{currentContent.content}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <ChevronLeft className={isRTL ? 'ml-2' : 'mr-2'} />
            Previous
          </button>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentSection('reading')}
              className={`px-4 py-2 rounded-lg ${currentSection === 'reading' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            >
              Reading
            </button>
            <button
              onClick={() => setCurrentSection('video')}
              className={`px-4 py-2 rounded-lg ${currentSection === 'video' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            >
              Video
            </button>
          </div>
          
          <button
            onClick={handleNext}
            className="flex items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
          >
            Next
            <ChevronRight className={isRTL ? 'mr-2' : 'ml-2'} />
          </button>
        </div>
      </div>
    </div>
  );
}
