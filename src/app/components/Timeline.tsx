import React from "react";
import { calculatePosition } from "../utils/calculatePosition";
import dayjs from "dayjs";
import TimelineBracket from "./TimelineBracket";

const events = [
  {
    startDate: "2017-04-04",
    endDate: "2019-10-09",
    description: "sa dfa ssdsa fdfas asdf asdlkfjasldf",
  },
  {
    startDate: "2019-01-09",
    endDate: "2022-12-20",
    description: "asdfsdafasdf",
  },
  {
    startDate: "2022-04-09",
    endDate: "2024-03-02",
    description: "asdfsdafasdf",
  },
  {
    startDate: "2016-01-09",
    endDate: "2016-10-02",
    description: "asdfsdafasdf",
  },
];

const Timeline: React.FC = () => {
  const minDate = "2016-01-01"; // Timeline start date
  const maxDate = dayjs().format("YYYY-MM-DD"); // Timeline end date (current date)

  return (
    <>
      <div className="relative h-[300vh] w-2 bg-gray-300 ml-20 my-20"></div>
      
      <div className="absolute w-full max-w-screen h-[300vh] ml-20 my-20">
        {events.map((event, index) => {
          const startPercentage = calculatePosition(
            event.startDate,
            minDate,
            maxDate
          );
          const endPercentage = calculatePosition(
            event.endDate,
            minDate,
            maxDate
          );

          const midPercentage = (startPercentage + endPercentage) / 2;

          return (
            <TimelineBracket
              startDate={event.startDate}
              endDate={event.endDate}
              startPercentage={startPercentage}
              endPercentage={endPercentage}
              midPercentage={midPercentage}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Timeline;
