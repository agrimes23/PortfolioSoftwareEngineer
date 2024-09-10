export const calculatePosition = (date: string, minDate: string, maxDate: string): number => {
  const eventTime = new Date(date).getTime();
  const minTime = new Date(minDate).getTime();
  const maxTime = new Date(maxDate).getTime();

  // Calculate total duration of the timeline
  const totalDuration = maxTime - minTime;

  // Calculate the position percentage as if the timeline is inverted
  const positionPercentage = 100 - ((eventTime - minTime) / totalDuration) * 100;

  console.log("percentage and date: " + JSON.stringify(date) + " percentage: " + JSON.stringify(positionPercentage))

  return Math.round(positionPercentage);
};