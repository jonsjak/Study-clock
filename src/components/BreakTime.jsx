import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { restartTimer } from '../state/reducers/studySlice';
import { resetBreak } from '../state/reducers/breakSlice';

export const BreakTime = () => {
  // Initial break time from Redux
  const isRunning = useSelector(state => state.study.isRunning);
  const initialTime = useSelector(state => state.break.duration * 60);
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const isBreakTime = useSelector(state => state.break.isBreakTime);
  const dispatch = useDispatch();

  useEffect(() => {
    // If timer is started and it's break time
    if (isRunning && isBreakTime) {
      const timerInterval = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime === 0) {
            clearInterval(timerInterval);
            dispatch(restartTimer())
            dispatch(resetBreak());
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);

      // Cleanup the interval when the component unmounts
      return () => clearInterval(timerInterval);
    }
  }, [isRunning, isBreakTime, dispatch]);

  // Convert time input to minutes and seconds
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  // Format minutes and seconds with leading zeros
  const formattedMinutes = minutes < 10 ? ("0" + minutes) : minutes;
  const formattedSeconds = seconds < 10 ? ("0" + seconds) : seconds;

  return (
    <>
      <h2 id="time-left" style={{color: "red"}}>
        {formattedMinutes}:{formattedSeconds}
      </BreakClockText>
    </>
  );
};