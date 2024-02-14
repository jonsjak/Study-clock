import { useSelector } from 'react-redux';
import { SessionContainer } from './SessionContainer';
import { useEffect, useState } from 'react';
import { ClockStarter } from './ClockStarter';

export const BreakTime = () => {
  //Initial time from redux
  const initialBreakTime = useSelector(state => state.break.duration*60);
  const [timeRemaining, setTimeRemaining] = useState(initialBreakTime);
 
  useEffect(() => {
    // Reset timer when duration changes
    setTimeRemaining(initialBreakTime);
  }, [initialBreakTime]);

  useEffect(() => {
      const timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timerInterval);
            console.log('Countdown complete!');
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(timerInterval);
  }, [initialBreakTime]);

  // convert time input to minutes and seconds
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  //...and format to have leading zeros
  const formattedMinutes = minutes < 10 ? ("0" + minutes) : minutes;
  const formattedSeconds = seconds < 10 ? ("0" + seconds) : seconds;

  
  return (
    <h2>{formattedMinutes}:{formattedSeconds}</h2>
  )
}
