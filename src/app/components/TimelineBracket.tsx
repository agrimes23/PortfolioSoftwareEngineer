import React from "react";

interface TimelineBracketProps {
  event: {
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    description: string;
  };
  startPercentage: number;
  endPercentage: number;
  midPercentage: number;
  index: number;
}

const TimelineBracket: React.FC<TimelineBracketProps> = ({
  event,
  startPercentage,
  endPercentage,
  midPercentage,
  index,
}) => {
  const getLineLengthAndPosition = (index: number) => {
    if (index % 3 === 0) {
      return {
        lineLength: "w-[20%]",
        boxPosition: "left-[20%]",
        horizontalBracket: "w-8 group-hover:w-10",
        verticalBracket: "left-[2rem] group-hover:left-[2.3rem]"
      }; // Short line, closer box
    } else if (index % 3 === 1) {
      return {
        lineLength: "w-[50vw]",
        boxPosition: "left-[50vw]",
        horizontalBracket: "w-10 group-hover:w-12",
        verticalBracket: "left-[2.5rem] group-hover:left-[2.8rem]",
      }; // Medium line, middle box
    } else {
      return {
        lineLength: "w-[80%]",
        boxPosition: "left-[80%]",
        horizontalBracket: "w-12 group-hover:w-14",
        verticalBracket: "left-[3rem] group-hover:left-[3.3rem]",
      }; // Long line, farther box
    }
  };

  const { lineLength, boxPosition, horizontalBracket, verticalBracket } = getLineLengthAndPosition(index);

  return (
    <div key={index} className="w-full  group hover">
      {/* Start node */}
      <div
        className="absolute w-6 h-6 bg-yellow-200 rounded-full"
        style={{ top: `${startPercentage}%`, left: "-0.5rem" }}
      >
        <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-xs">
          {event.startDate}
        </span>
      </div>

      {/* Only render the end node if it's a multi-day event */}
      {event.startDate === event.endDate ? (
        <div className="w-full">
          {/* Horizontal line extending to the text box */}
          <div
            className={`absolute bg-blue-400 h-[1px] group-hover:h-[3px] left-[0.8rem] transition-all duration-100 ${lineLength}`}
            style={{ top: `${startPercentage + 0.3}%` }}
          />

          {/* Text box for one-day event */}
          <div
            className={`absolute bg-pink-900 text-white p-4 rounded-md w-96 shadow-lg transition-transform duration-100 group-hover:scale-125 ${boxPosition}`}
            style={{ top: `${startPercentage - 0.3}%` }} // Adjust position slightly for better alignment
          >
            <h3>{event.title}</h3>
            <h3>{event.company}</h3>
            <p className="text-sm">{event.description}</p>
          </div>
        </div>
      ) : (
        <>
          {/* End node for multi-day events */}
          <div
            className="absolute w-6 h-6 bg-yellow-200 rounded-full"
            style={{ top: `${endPercentage}%`, left: "-0.5rem" }}
          >
            <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-xs">
              {event.endDate}
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
              top: `${endPercentage}%`,
              left: "0.5rem",
              height: `${startPercentage - endPercentage}%`,
              transform: "translateX(0%)",
            }}
          >
            {/* Extend the line horizontally */}
            {/* w-8, group-hover:w-10 */}
            <div
              className={`absolute bg-blue-400 transition-all duration-100 left-0 ${horizontalBracket} h-[1px] group-hover:h-[3px]  group-hover:shadow-glow`}
              style={{
                top: 12,
                left: 0,
              }}
            />
            {/* w-8, group-hover:w-10 */}
            <div
              className={`absolute bg-blue-400 transition-all duration-100 left-0 ${horizontalBracket} h-[1px] group-hover:h-[3px] group-hover:shadow-glow`}
              style={{
                bottom: -12,
              }}
            />
            {/* left-[2rem], group-hover:left-[2.3rem] */}
            <div
              className={`absolute bg-blue-400 transition-all duration-100 ${verticalBracket} w-[1px] group-hover:w-[3px] group-hover:h-[2px] group-hover:left-[2.3rem] group-hover:shadow-glow`}
              style={{
                top: 12,
                height: "100%",
              }}
            />
            {/* Horizontal line extending from midpoint */}
            <div className="w-full">
              <div
                className={`absolute bg-blue-400 h-[1px] group-hover:h-[3px] ${verticalBracket} w-32 transition-all duration-100 ${lineLength}`}
                style={{ top: `50%` }}
              />

              {/* Text box connected to the horizontal line */}

              <div
                className={`absolute bg-pink-900 text-white p-4 rounded-md w-96 shadow-lg transition-transform duration-100 group-hover:scale-125 ${boxPosition}`}
                style={{ top: `45%` }}
              >
                <h3>{event.title}</h3>
                <h3>{event.company}</h3>
                <p className="text-sm">{event.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TimelineBracket;
