import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { decreaseBreak, setItIsBreakTime } from '../state/reducers/breakSlice';
import { resetTimer } from '../state/reducers/studySlice';
import { resetThunk } from '../state/thunks/resetThunk';

export const BreakTime = () => {
  // Initial break time from Redux
  const isRunning = useSelector(state => state.study.isRunning);
  const timeRemaining = useSelector(state => state.break.duration);
  const isBreakTime = useSelector(state => state.break.isBreakTime);
  const dispatch = useDispatch();

  useEffect(() => {
    // If timer is started and it's break time
    if (isRunning && isBreakTime) {
      const timerInterval = setInterval(() => {
        if (timeRemaining === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          dispatch(resetThunk);
        } else {
          dispatch(decreaseBreak()); // Assuming you have a decrementTime action in your reducer
        }
      }, 1000);

      // Cleanup the interval when the component unmounts
      return () => clearInterval(timerInterval);
    }
  }, [isRunning, timeRemaining, isBreakTime, dispatch]);

  // Convert time input to minutes and seconds
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  // Format minutes and seconds with leading zeros
  const formattedMinutes = minutes < 10 ? ("0" + minutes) : minutes;
  const formattedSeconds = seconds < 10 ? ("0" + seconds) : seconds;

  return (
    <>
      <h2>
        {formattedMinutes}:{formattedSeconds}
      </h2>
    </>
  );
};
