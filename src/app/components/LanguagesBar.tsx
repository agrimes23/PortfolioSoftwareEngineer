import React from 'react';

interface LanguageBarProps {
  languages: Record<string, number>;
}

const languageColors: Record<string, string> = {
    TypeScript: 'bg-blue-400',
    JavaScript: 'bg-yellow-400',
    CSS: 'bg-purple-400',
    HTML: 'bg-red-400',
    Java: 'bg-orange-400',
    'C#': 'bg-green-400'
  };
  

const LanguagesBar: React.FC<LanguageBarProps> = ({ languages }) => {
  const total = Object.values(languages).reduce((acc, value) => acc + value, 0);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-4 bg-neutral-700 rounded-lg overflow-hidden mb-4">
        {Object.entries(languages).reduce((acc, [language, value], index) => {
          const percentage = total > 0 ? (value / total) * 100 : 0;

          let bgColor =  languageColors[language] || 'bg-gray-400';

          const width = `${percentage}%`;

          return acc.concat(
            <div
              key={index}
              className={`absolute top-0 left-0 h-full ${bgColor}`}
              style={{ width, zIndex: 1 }}
            />
          );
        }, [] as JSX.Element[])}
      </div>
      <div className="flex w-full gap-3">
        {Object.entries(languages).map(([language, value]) => {
          const percentage = total > 0 ? (value / total) * 100 : 0;

          let bgColor =  languageColors[language] || 'bg-gray-400'; 
          
          return (
            <div key={language} className="flex mb-2">
              <div
                className={`w-2 h-2 mr-2 mt-1 ${bgColor} rounded-full`}
              />
              <p className="text-white text-[0.7rem]">
                {language}: {percentage.toFixed(1)}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguagesBar;