import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setItIsBreakTime } from '../state/reducers/breakSlice';

export const StudyTime = () => {
  //Initial time from redux
  const initialTime = useSelector(state => state.study.duration * 60);
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const isRunning = useSelector(state => state.study.isRunning);
  const isBreakTime = useSelector(state => state.break.isBreakTime);
  const isResetting = useSelector(state => state.study.isResetting);
  const dispatch = useDispatch();

  useEffect(() => {
    // Update the time remaining whenever the study duration changes
    setTimeRemaining(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (isResetting) {
      setTimeRemaining(initialTime)
    }
  }, [isResetting, initialTime])

  useEffect(() => {
    //if timer is started...
    if (isRunning && !isBreakTime) {
      const timerInterval = setInterval(() => {
        // Update the remaining time every second
        setTimeRemaining(prevTime => {
          if (prevTime === 0) {
            clearInterval(timerInterval);
            // Perform actions when the timer reaches zero
            const alarmSound = new Audio("/clock-alarm-8761.mp3");
            alarmSound.play();
            // toggles breaktime
            dispatch(setItIsBreakTime(true));
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [isRunning, timeRemaining, isBreakTime, dispatch]);

  // convert time input to minutes and seconds
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  //...and format to have leading zeros
  const formattedMinutes = minutes < 10 ? ("0" + minutes) : minutes;
  const formattedSeconds = seconds < 10 ? ("0" + seconds) : seconds;

  return (
    <>
      <h2 id="time-left" style={{fontSize: "26px"}}>
        {formattedMinutes}:{formattedSeconds}
      </h2>
    </>
  );
};
