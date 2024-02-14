import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setBreakTime } from '../state/reducers/breakSlice';

export const Timer = () => {
  //Initial times from redux
  const initialStudyTime = useSelector(state => state.study.duration);
  const initialBreakTime = useSelector(state => state.break.duration);
  const isRunning = useSelector(state => state.study.isRunning);
  const isBreakTime = useSelector(state => state.break.isBreakTime);
  const [studyTimeRemaining, setStudyTimeRemaining] = useState(initialStudyTime);
  const dispatch = useDispatch();

  useEffect(() => {
    //if it's not break time...
    if (!isBreakTime)
    //and timer is started...
    {if (isRunning) {
      const timerInterval = setInterval(() => {
        setStudyTimeRemaining(prevTime => {
          if (prevTime === 0) {
            clearInterval(timerInterval);
            // Perform actions when the timer reaches zero
            const alarmSound = new Audio("/clock-alarm-8761.mp3");
            alarmSound.play();
            if(!isBreakTime){
              dispatch(setBreakTime(true));
            }
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);

      // Cleanup the interval when the component unmounts
      return () => clearInterval(timerInterval);
    }}
  }, [isRunning, initialStudyTime, isBreakTime, dispatch]);

  //resetting the initialTime
  useEffect(() => {
    setStudyTimeRemaining(initialStudyTime);
  }, [initialStudyTime]);

  // convert time input to minutes and seconds
  const minutes = Math.floor((studyTimeRemaining % 3600) / 60);
  const seconds = studyTimeRemaining % 60;

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
