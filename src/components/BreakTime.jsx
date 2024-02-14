import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setBreakTime } from '../state/reducers/breakSlice';

export const BreakTime = () => {
  //Initial time from redux
  const initialBreakTime = useSelector(state => state.break.duration);
  const isBreakTime = useSelector(state => state.break.isBreakTime)
  const [timeRemaining, setTimeRemaining] = useState(initialBreakTime);
  const dispatch = useDispatch();

  useEffect(() => {
      const timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timerInterval);
            if (isBreakTime) {
              dispatch(setBreakTime(!isBreakTime))
            }
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(timerInterval);
  }, [initialBreakTime, isBreakTime, dispatch]);

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
