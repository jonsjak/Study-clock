import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decreaseStudy, increaseStudy } from "../state/reducers/studySlice";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { LengthContainer } from './LengthContainer';
import { TimerSpan } from './TimerSpan';
import { StyledButton } from './StyledButton';

export const StudyLength = () => {
  const dispatch = useDispatch();
  const studyDuration = useSelector(state => state.study.duration);

  return (
    <LengthContainer>
      <h2>StudyLength</h2>
      <TimerSpan>
        <StyledButton onClick={() => dispatch(decreaseStudy())}>
          <FaArrowDown />
        </StyledButton>
        <p>{studyDuration}</p>
        <StyledButton onClick={() => dispatch(increaseStudy())}>
          <FaArrowUp />
        </StyledButton>
      </TimerSpan>
    </LengthContainer>
  )
}