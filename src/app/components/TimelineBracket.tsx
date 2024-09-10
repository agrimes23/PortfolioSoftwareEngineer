import React from "react";

interface TimelineBracketProps {
  startDate: string;
  endDate: string;
  startPercentage: number;
  endPercentage: number;
  midPercentage: number;
  index: number;
}

const TimelineBracket: React.FC<TimelineBracketProps> = ({
  startDate,
  endDate,
  startPercentage,
  endPercentage,
  midPercentage,
  index,
}) => {
  const getLineLengthAndPosition = (index: number) => {
    if (index % 3 === 0) {
      return { lineLength: "w-32", boxPosition: "left-40", hoverLength: "" }; // Short line, closer box
    } else if (index % 3 === 1) {
      return { lineLength: "w-48", boxPosition: "left-56" }; // Medium line, middle box
    } else {
      return { lineLength: "w-64", boxPosition: "left-72" }; // Long line, farther box
    }
  };

  const { lineLength, boxPosition } = getLineLengthAndPosition(index);

  return (
    <div className="w-full ">
      {/* Start node */}
      <div
        className="absolute w-6 h-6 bg-yellow-200 rounded-full"
        style={{ top: `${startPercentage}%`, left: "-0.5rem" }}
      >
        <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-xs">
          {startDate}
        </span>
      </div>

      {/* End node */}
      <div
        className="absolute w-6 h-6 bg-yellow-200 rounded-full"
        style={{ top: `${endPercentage}%`, left: "-0.5rem" }}
      >
        <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-xs">
          {endDate}
        </span>
      </div>

      {/* Midpoint node (the bracket) */}
      <div
        className="absolute ml-20"
        style={{ top: `${midPercentage}%`, left: "1rem" }}
      ></div>

      {/* Connecting bracket (line) */}
      <div
        className="absolute overflow-visible transform origin-left transition-transform duration-300 w-full max-w-screen group hover"
        style={{
          top: `${startPercentage}%`,
          left: "0.5rem",
          height: `${endPercentage - startPercentage}%`,
          transform: "translateX(0%)",
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
            height: "100%",
          }}
        />
        {/* Horizontal line extending from midpoint */}
        <div className="w-full">
          <div
            className={`absolute bg-blue-400 h-[1px] group-hover:h-[3px] left-[2rem] group-hover:left-[2.3rem] w-32 group-hover:w-36 transition-all duration-100 ${lineLength}`}
            style={{ top: `50%` }}
          />

          {/* Text box connected to the horizontal line */}

          <div
            className={`absolute bg-pink-900 text-white p-4 rounded-md shadow-lg transition-transform duration-100 group-hover:w-28 group-hover:h-24 ${boxPosition}`}
            style={{ top: `50%` }}
          >
            <p className="text-sm">Event description goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineBracket;
