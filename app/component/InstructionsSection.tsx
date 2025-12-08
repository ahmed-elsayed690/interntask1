// app/component/InstructionsSection.tsx
"use client";

export default function InstructionsSection() {
  return (
    <div className="quiz-card mb-8">
      <h2 className="quiz-card-header">Instructions</h2>
      
      <div className="quiz-section">
        <h3 className="quiz-section-header">Self-Assessment 1</h3>
        <p className="quiz-text">
          Below are a set of questions that allow you to assess your own knowledge based on an overview of the course module.
        </p>
        <p className="quiz-text">
          Bear in mind that you can do the self-assessment as many times as you deem necessary.
        </p>
        <p className="quiz-text mb-4">
          After answering each question, you will see a remark indicating where the concepts mentioned can be explored in greater depth.
        </p>
        
        <p className="font-medium text-gray-800 mb-3">You will find different types of questions-assignments:</p>
        <ul className="quiz-list">
          <li className="quiz-list-item">
            <span className="mr-2 mt-1">•</span>
            <span className="text-gray-700">
              <strong>Multiple choice:</strong> only one of the options is correct. The choices are shown with circles. 
              You must select the correct choice by marking the preceding circle.
            </span>
          </li>
        </ul>
      </div>

      <div className="quiz-divider"></div>

      <div>
        <h3 className="quiz-section-header">Last attempt details:</h3>
        <div className="space-y-3 mb-6">
          <div className="flex">
            <div className="w-48 font-medium text-gray-700">Time:</div>
            <div className="font-semibold">754 minutes</div>
          </div>
          <div className="flex">
            <div className="w-48 font-medium text-gray-700">Current score:</div>
            <div className="font-semibold">100 out of 100</div>
          </div>
          <div className="flex">
            <div className="w-48 font-medium text-gray-700">Kept score:</div>
            <div className="font-semibold">100 out of 100</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border mb-6">
        <div className="flex flex-wrap items-center justify-between mb-4">
          <div>
            <div className="font-semibold text-gray-800">2 Attempts so far</div>
            <div className="text-blue-600 hover:underline cursor-pointer text-sm mt-1">(3) View previous attempts</div>
          </div>
          <div className="font-medium text-gray-700">Unlimited attempts</div>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
          Take the quiz again
        </button>
        
        <div className="text-center text-sm text-gray-600 mt-3">
          (Will keep the highest of all your scores)
        </div>
      </div>
    </div>
  );
}