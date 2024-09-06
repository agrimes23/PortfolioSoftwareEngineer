export const calculatePosition = (date: string, minDate: string, maxDate: string): number => {
    const eventTime = new Date(date).getTime();
    const minTime = new Date(minDate).getTime();
    const maxTime = new Date(maxDate).getTime();
  
    const totalDuration = maxTime - minTime;
    const positionPercentage = ((eventTime - minTime) / totalDuration) * 100;
    console.log("percentage and date: " + JSON.stringify(date) + " percentage: " + JSON.stringify(positionPercentage))
  
    return Math.round(positionPercentage);
  };