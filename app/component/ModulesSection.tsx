import ModuleCard from './ModuleCard';

interface ModuleData {
  number: string;
  items: string[];
}

export default function ModulesSection() {
  const modules: ModuleData[] = [
    { 
      number: "01", 
      items: ["Reading", "Video", "Self-Assessment"]
    },
    { 
      number: "02", 
      items: ["Reading", "Video", "Self-Assessment"]
    },
    { 
      number: "03", 
      items: ["Reading", "Video", "Self-Assessment", "Activity"]
    },
    { 
      number: "04", 
      items: ["Reading", "Video", "Activity"]
    }
  ];

  return (
    <div className="mb-14">
      <div className="text-2xl font-bold text-[darkblue] mb-7">Modules</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {modules.map((module) => (
          <ModuleCard 
            key={module.number} 
            number={module.number} 
            items={module.items} 
          />
        ))}
      </div>
    </div>
  );
}