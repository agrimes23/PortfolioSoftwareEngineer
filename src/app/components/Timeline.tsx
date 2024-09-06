import React from 'react';
import { calculatePosition } from '../utils/calculatePosition';
import dayjs from 'dayjs';
import TimelineBracket from './TimelineBracket';

const events = [
  { startDate: '2017-04-04', endDate: '2019-10-09' },
  { startDate: '2019-01-09', endDate: '2022-12-20' },
];

const Timeline: React.FC = () => {
  const minDate = '2016-01-01'; // Timeline start date
  const maxDate = dayjs().format('YYYY-MM-DD'); // Timeline end date (current date)

  return (
    <div className="relative h-[150vh] w-2 bg-gray-300 ml-20 my-20">
      {events.map((event) => {
        const startPercentage = calculatePosition(event.startDate, minDate, maxDate);
        const endPercentage = calculatePosition(event.endDate, minDate, maxDate);

        const midPercentage = (startPercentage + endPercentage) / 2;

        return (
          <TimelineBracket startDate={event.startDate} endDate={event.endDate} startPercentage={startPercentage} endPercentage={endPercentage} midPercentage={midPercentage}/>
        );
      })}
    </div>
  );
};

export default Timeline;