import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { startStopTimer } from '../state/reducers/studySlice';
import { resetThunk } from '../state/thunks/resetThunk';
import { StyledButton } from './styled_components/StyledButton';
import { ClockStarterContainer } from './styled_components/ClockStarterContainer';




export const ClockStarter = () => {
  const isRunning = useSelector(state => state.study.isRunning)
  const dispatch = useDispatch();

  return (
    <ClockStarterContainer>
      <StyledButton id="start_stop" onClick={() => dispatch(startStopTimer())}>
        {isRunning? 
          <FaPauseCircle /> :
          <FaPlayCircle /> 
        }
      </StyledButton>
      
      <StyledButton id="reset" onClick={() => dispatch(resetThunk)}>
        <FaArrowsRotate />
      </StyledButton>
    </ClockStarterContainer>
  )  
};