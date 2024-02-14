import { useSelector } from 'react-redux';
import { SessionContainer } from './SessionContainer';
import { useEffect, useState } from 'react';
import { ClockStarter } from './ClockStarter';

export const StudyTime = () => {
  //Initial time from redux
  const initialTime = useSelector(state => state.study.duration*60);
  const isRunning = useSelector(state => state.study.isRunning);
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
 
  useEffect(() => {
    // Reset timer when duration changes
    setTimeRemaining(initialTime);
  }, [initialTime]);

  useEffect(() => {
    //if timer is started...
    if(isRunning){
      const timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timerInterval);
            // Perform actions when the timer reaches zero
            const alarmSound = new Audio ("/clock-alarm-8761.mp3");
            alarmSound.play();
            console.log('Countdown complete!');
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(timerInterval);
    }
  }, [isRunning, initialTime]);

  // convert time input to minutes and seconds
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  //...and format to have leading zeros
  const formattedMinutes = minutes < 10 ? ("0" + minutes) : minutes;
  const formattedSeconds = seconds < 10 ? ("0" + seconds) : seconds;

  
  return (
  <>
    <h2>
      {formattedMinutes}:{formattedSeconds}
    </h2>
    <ClockStarter />
  </>
  )
}
