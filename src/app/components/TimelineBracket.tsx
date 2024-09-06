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
        className="absolute w-6 h-6 bg-yellow-200 rounded-full"
        style={{ top: `${startPercentage}%`, left: '-0.5rem' }}
      >
        <span className="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs">
          {startDate}
        </span>
      </div>

      {/* End node */}
      <div
        className="absolute w-6 h-6 bg-yellow-200 rounded-full"
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
        className="relative overflow-visible transform origin-left transition-transform duration-300 w-10 group hover"
        style={{
          top: `${startPercentage}%`,
          left: '0.5rem',
          height: `${endPercentage - startPercentage}%`,
          transform: 'translateX(0%)',
        }}
      >
        {/* Extend the line horizontally */}
        <div
          className="absolute bg-blue-400 transition-all duration-100 left-0 w-8 h-[1px] group-hover:w-10 group-hover:h-[3px]  group-hover:shadow-glow"
          style={{
            top: 12,
            left: 0,
          }}
        />
        <div
          className="absolute bg-blue-400 transition-all duration-100 left-0 w-8 h-[1px] group-hover:w-10 group-hover:h-[3px] group-hover:shadow-glow"
          style={{
            bottom: -12,
          }}
        />
        <div
          className="absolute bg-blue-400 transition-all duration-100 left-[2rem] w-[1px] group-hover:w-[3px] group-hover:h-[2px] group-hover:left-[2.3rem] group-hover:shadow-glow"
          style={{
            top: 12,
            height: '100%',
          }}
        />
      </div>
      
    </div>
  );
}

export default TimelineBracket