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
              content: "The time gap separating one generation from the other has undeniably decreased, and the differences in personalities, interests and objectives occupy a more than significant role