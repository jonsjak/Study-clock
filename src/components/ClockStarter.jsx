import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { startStopTimer } from '../state/reducers/studySlice';
import { resetThunk } from '../state/thunks/resetThunk';

export const ClockStarter = () => {
  const isRunning = useSelector(state => state.study.isRunning)
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', gap: '50px' }}>
      <button id="start_stop" onClick={() => dispatch(startStopTimer())}>
        {isRunning? 
          <FaPauseCircle /> :
          <FaPlayCircle /> 
        }
      </button>
      
      <button id="reset" onClick={() => dispatch(resetThunk)}>
        <FaArrowsRotate />
      </button>
    </div>
  )  
};