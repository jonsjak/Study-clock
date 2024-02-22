import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setItIsBreakTime } from '../state/reducers/breakSlice';
import { decreaseStudy } from '../state/reducers/studySlice';

export const StudyTime = () => {
  //Initial time from redux
  const timeRemaining = useSelector(state => state.study.duration);
  const isRunning = useSelector(state => state.study.isRunning);
  const isBreakTime = useSelector(state => state.break.isBreakTime);
  const dispatch = useDispatch();

  useEffect(() => {
    //if timer is started...
    if (isRunning) {
      const timerInterval = setInterval(() => {
        if (timeRemaining === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          const alarmSound = new Audio("/clock-alarm-8761.mp3");
          alarmSound.play();
          if (!isBreakTime) {
            dispatch(setItIsBreakTime(true));
          }
        } else {
          dispatch(decreaseStudy()); // Assuming you have a decrementTime action in your reducer
        }
      }, 1000);

      // Cleanup the interval when the component unmounts
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
      <h2>
        {formattedMinutes}:{formattedSeconds}
      </h2>
    </>
  );
};
