// app/component/QuestionTypesSection.tsx
"use client";

const questionTypes = [
  {
    icon: "☒",
    title: "Multiple choices",
    description: "only one of the options is correct. The choices are shown with circles. You must select the correct choice by marking the preceding circle."
  },
  {
    icon: "☐",
    title: "Multiple answers:",
    description: "more than one answer is correct. The choices are shown with squares. Select all the choices you consider correct, ticking the squares immediately preceding them. Partial scores shall be awarded if not all corresponding answers are correctly indicated."
  },
  {
    icon: "📌",
    title: "Matching:",
    description: "link two categories by selecting the concept in the first column and matching it with the corresponding category in the second column."
  },
  {
    icon: "✔",
    title: "True-False:",
    description: "indicate whether the statement can be considered true or false. Bear in mind that if a single element in the statement is false, the statement as a whole is to be considered false."
  }
];

export default function QuestionTypesSection() {
  return (
    <div className="mb-6">
      <p className="quiz-text">
        Bear in mind that you can do the self-assessment as many times as you deem necessary.
      </p>
      <p className="quiz-text mb-6">
        After answering each question, you will see a remark indicating where the concepts mentioned can be explored in greater depth.
      </p>

      <div className="bg-white border rounded-lg p-6">
        <h2 className="quiz-card-header">
          You will find different types of questions-assignments:
        </h2>
        
        <div className="space-y-4 mb-8">
          {questionTypes.map((type, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
              <div className="mr-4 text-2xl mt-1">{type.icon}</div>
              <div>
                <div className="font-semibold text-gray-800 mb-2">{type.title}</div>
                <div className="text-gray-700">{type.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <button className="btn-primary">
            Take the quiz again
          </button>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-4 text-lg">Grade Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="quiz-stat-label">Average Score</div>
              <div className="text-3xl font-bold text-gray-800">92%</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="quiz-stat-label">Completed</div>
              <div className="text-3xl font-bold text-gray-800">8/10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}