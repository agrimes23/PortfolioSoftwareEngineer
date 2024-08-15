import React from 'react'

interface LanguageBarProps {
    languages: Record<string, number>;
}


const LanguagesBar: React.FC<LanguageBarProps> = ({
    languages
  }) => {

    const total = Object.values(languages).reduce((acc, value) => acc + value, 0);
  
  
  // Mapping language names to Tailwind color classes  
  const languageColors: Record<string, string> = {
    Java: 'bg-orange-400',
    'C#': 'bg-green-400',
    TypeScript: 'bg-purple-400',
    JavaScript: 'bg-yellow-400',
    CSS: 'bg-blue-400',
    HTML: 'bg-red-400',
    // Add more mappings as needed
  };


  return (
    <div className="my-10">
        <p className="text-accent">Language(s) Used:</p>
        {Object.entries(languages).map(([language, value]) => {
        const percentage = (value / total) * 100;
        const bgColor = languageColors[language] || 'bg-gray-400'; // Default color if language not in map
        return (
          <div
            key={language}
            className={`h-full ${bgColor} rounded-lg`}
            style={{ width: `${percentage}%` }}
          >
            <span className="sr-only">{language} ({percentage.toFixed(2)}%)</span>
          </div>
        );
      })}
    </div>
  )
}

export default LanguagesBar