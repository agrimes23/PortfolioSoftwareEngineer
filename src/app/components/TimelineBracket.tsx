import React from 'react'

interface TimelineBracketProps {
  startDate: string;
  endDate: string;
  startPercentage: number;
  endPercentage: number;
  midPercentage: number;
}

const TimelineBracket: React.FC<TimelineBracketProps> = ({startDate, endDate, startPercentage, endPercentage, midPercentage}) => {
  return (
    <div className="absolute h-96 w-2">
      {/* Start node */}
      <div
        className="absolute w-6 h-6 bg-blue-500 rounded-full"
        style={{ top: `${startPercentage}%`, left: '-0.5rem' }}
      >
        <span className="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs">
          {startDate}
        </span>
      </div>

      {/* End node */}
      <div
        className="absolute w-6 h-6 bg-red-500 rounded-full"
        style={{ top: `${endPercentage}%`, left: '-0.5rem' }}
      >
        <span className="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs">
          {endDate}
        </span>
      </div>

      {/* Midpoint node (the bracket) */}
      <div
        className="absolute"
        style={{ top: `${midPercentage}%`, left: '1rem' }}
      ></div>

      {/* Connecting bracket (line) */}
      <div
        className="relative overflow-visible transform origin-left transition-transform duration-300 w-2 group hover:w-52 bg-emerald-300"
        style={{
          top: `${startPercentage}%`,
          left: '0.5rem',
          height: `${endPercentage - startPercentage}%`,
          transform: 'translateX(0%)',
        }}
      >
        {/* Extend the line horizontally */}
        <div
          className="absolute bg-pink-400 transition-all duration-300 w-[1px] group-hover:w-32"
          style={{
            top: 12,
            left: 0,
            height: '1px',
          }}
        />
        <div
          className="absolute bg-blue-400 transition-all duration-300 w-full group-hover:w-32"
          style={{
            bottom: -12,
            left: 0,
            height: '1px',
          }}
        />
        <div
          className="absolute bg-pink-400 transition-all duration-300 w-[1px] group-hover:w-32"
          style={{
            top: 12,
            left: '2rem',
            height: '100%',
          }}
        />
      </div>
      
    </div>
  );
}

export default TimelineBracket