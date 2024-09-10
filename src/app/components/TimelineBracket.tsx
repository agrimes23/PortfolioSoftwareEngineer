import React, { useState } from "react";

interface TimelineBracketProps {
  event: {
    eventColor: string;
    eventType: string;
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    description: string[];
  };
  startPercentage: number;
  endPercentage: number;
  midPercentage: number;
  index: number;
  showDesc: boolean;
  onToggle: () => void;
}

const TimelineBracket: React.FC<TimelineBracketProps> = ({
  event,
  startPercentage,
  endPercentage,
  midPercentage,
  index,
  showDesc,
  onToggle,
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
      };
    } else {
      return {
        lineLength: "w-[80%]",
        boxPosition: "left-[80%]",
        horizontalBracket: "w-12 group-hover:w-14",
        verticalBracket: "left-[3rem] group-hover:left-[3.3rem]",
      };
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
        <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-xs text-white">
          {event.startDate}
        </span>
      </div>

      {/* Only render the end node if it's a multi-day event */}
      {event.startDate === event.endDate ? (
        <div className="w-full">
          {/* Horizontal line extending to the text box */}
          <div
            className={`absolute ${event.eventColor} h-[1px] group-hover:h-[3px] left-[0.8rem] transition-all duration-100 ${lineLength}`}
            style={{ top: `${startPercentage + 0.3}%` }}
          />

          {/* Text box for one-day event */}
          <div
            className={`absolute ${event.eventColor} text-white p-4 rounded-md w-96 shadow-lg transition-transform duration-100 group-hover:scale-125 ${boxPosition}`}
            style={{ top: `${startPercentage - 0.3}%` }} // Adjust position slightly for better alignment
          >
            {event.eventType === "job" ? (
              <span className="material-symbols-outlined absolute right-4 cursor-default">
                work
              </span>
            ) : event.eventType === "certificate" ? (
              <span className="material-symbols-outlined absolute right-4 cursor-default">
                workspace_premium
              </span>
            ) : (
              <span className="material-symbols-outlined absolute right-4 cursor-default">
                rocket_launch
              </span>
            )}
            <button className="absolute top-14 right-4" onClick={onToggle}>
              {showDesc ? (
                <span className="material-symbols-outlined">
                  keyboard_arrow_up
                </span>
              ) : (
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              )}
            </button>
            <div className="pb-6">
              <h3>{event.title}</h3>
              <h3>{event.company}</h3>
            </div>
            {showDesc && (
              <div>
                {event.description.map((desc, index) => (
                  <p key={index} className="text-sm py-1">
                    {desc}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* End node for multi-day events */}
          <div
            className="absolute w-6 h-6 bg-yellow-200 rounded-full"
            style={{ top: `${endPercentage}%`, left: "-0.5rem" }}
          >
            <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-xs text-white">
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

            <div
              className={`absolute ${event.eventColor} transition-all duration-100 left-0 ${horizontalBracket} h-[1px] group-hover:h-[3px]  group-hover:shadow-glow`}
              style={{
                top: 12,
                left: 0,
              }}
            />

            <div
              className={`absolute ${event.eventColor} transition-all duration-100 left-0 ${horizontalBracket} h-[1px] group-hover:h-[3px] group-hover:shadow-glow`}
              style={{
                bottom: -12,
              }}
            />

            <div
              className={`absolute ${event.eventColor} transition-all duration-100 ${verticalBracket} w-[1px] group-hover:w-[3px] group-hover:h-[2px] group-hover:left-[2.3rem] group-hover:shadow-glow`}
              style={{
                top: 12,
                height: "100%",
              }}
            />
            {/* Horizontal line extending from midpoint */}
            <div className="w-full">
              <div
                className={`absolute ${event.eventColor} h-[1px] group-hover:h-[3px] ${verticalBracket} w-32 transition-all duration-100 ${lineLength}`}
                style={{ top: `50%` }}
              />

              {/* Text box connected to the horizontal line */}

              <div
                className={`absolute ${event.eventColor} text-white p-4 rounded-md w-96 shadow-lg transition-transform duration-100 group-hover:scale-125 ${boxPosition}`}
                style={{ top: `45%` }}
              >
                {event.eventType === "job" ? (
                  <span className="material-symbols-outlined absolute right-4 cursor-default">
                    work
                  </span>
                ) : event.eventType === "certificate" ? (
                  <span className="material-symbols-outlined absolute right-4 cursor-default">
                    workspace_premium
                  </span>
                ) : (
                  <span className="material-symbols-outlined absolute right-4 cursor-default">
                    rocket_launch
                  </span>
                )}
                <button className="absolute top-16 right-4" onClick={onToggle}>
                  {showDesc ? (
                    <span className="material-symbols-outlined">
                      keyboard_arrow_up
                    </span>
                  ) : (
                    <span className="material-symbols-outlined">
                      keyboard_arrow_down
                    </span>
                  )}
                </button>
                <div className="pb-6">
                  <h3 className="text-lg">{event.title}</h3>
                  <h4 className="text-sm italic">{event.company}</h4>
                </div>
                {showDesc && (
                  <div>
                    {event.description.map((desc, index) => (
                      <p key={index} className="text-sm py-1">
                        {desc}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TimelineBracket;
