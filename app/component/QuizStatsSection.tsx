// app/component/QuizStatsSection.tsx
"use client";

export default function QuizStatsSection() {
  const stats = [
    { label: "Date", value: "No due date" },
    { label: "Points", value: "100" },
    { label: "Questions", value: "10" },
    { label: "Time limit", value: "None" },
  ];

  return (
    <div className="mb-8">
      <div className="quiz-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="quiz-stat-item">
            <div className="quiz-stat-label">{stat.label}</div>
            <div className="quiz-stat-value">{stat.value}</div>
          </div>
        ))}
      </div>
      
      <div className="mb-8">
        <div className="quiz-stat-label">Allowed attempts</div>
        <div className="quiz-stat-value">Unlimited</div>
      </div>
    </div>
  );
}