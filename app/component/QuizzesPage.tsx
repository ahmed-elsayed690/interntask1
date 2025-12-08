// app/component/QuizzesPage.tsx
"use client";

import QuizStatsSection from './QuizStatsSection';
import InstructionsSection from './InstructionsSection';
import QuestionTypesSection from './QuestionTypesSection';

export default function QuizzesPage() {
  return (
    <div className="quiz-container">
      {/* SECTION 1: Self-Assessment (Top) */}
      <div className="mb-10">
        <h1 className="quiz-header">Self-Assessment</h1>
        
        <QuizStatsSection />
        <InstructionsSection />
      </div>

      {/* SECTION 2: Grades/Instructions (Bottom) */}
      <div className="mt-12 pt-8 border-t border-gray-300">
        <QuestionTypesSection />
      </div>
    </div>
  );
}