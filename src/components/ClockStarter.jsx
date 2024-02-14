import React from 'react';
import { useDispatch } from 'react-redux';
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { startTimer, pauseTimer, resetTimer } from '../state/reducers/studySlice';

export const ClockStarter = () => {
  const dispatch = useDispatch();

  const handleStartTimer = () => {
    dispatch(startTimer());
    console.log("started");
  };

  const handlePauseTimer = () => {
    dispatch(pauseTimer());
    console.log("paused");
  };

  const handleResetTimer = () => {
    if (window.confirm("Do you really want to reset the timer?")) {
      dispatch(resetTimer());
    }
  };

  return (
    <div style={{ display: 'flex', gap: '50px' }}>
      <FaPlayCircle onClick={handleStartTimer} />
      <FaPauseCircle onClick={handlePauseTimer} />
      <FaArrowsRotate onClick={handleResetTimer} />
    </div>
  )  
};