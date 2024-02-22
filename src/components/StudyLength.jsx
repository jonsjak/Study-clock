import { useDispatch, useSelector } from "react-redux";
import { decreaseStudy, increaseStudy, setDuration } from "../state/reducers/studySlice";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { LengthContainer } from './styled_components/LengthContainer';
import { TimerSpan } from './styled_components/TimerSpan';
import { StyledButton } from './styled_components/StyledButton';
import { useState } from "react";

export const StudyLength = () => {
  const studyDuration = useSelector(state => state.study.duration);
  const [studyLength, setStudyLength] = useState(studyDuration)
  const dispatch = useDispatch();
  const isRunning = useSelector(state => state.study.isRunning)

  //First makes sure to only handle changes when clock is NOT running
  //then checks if the local duration from the useState is equal to the redux state
  //then checks for increase or decrease (as long as studyLenght > 0)
  //finally (else) if the two values dont match, the local value is dispatched to state

  /* const handleStudyLength = (increase) => {
    if (!isRunning) {
      let newDuration;
      if (studyLength === studyDuration) {
        switch (increase) {
          case true:
            newDuration = studyLength + 1;
            break;
          case false:
            newDuration = studyLength > 0 ? studyLength - 1 : studyLength;
            break;
          default:
            newDuration = studyLength;
        }
        setStudyLength(newDuration);
        dispatch(increase ? increaseStudy() : decreaseStudy());
      } else {
        dispatch(setDuration(studyLength));
      }
    }
  } */

  const handleIncrease = () => {
    if (!isRunning) {
      if (!isRunning && studyLength === studyDuration) {
        const newDuration = studyLength + 1;
        setStudyLength(newDuration);
        dispatch(increaseStudy());
      } else {
        dispatch(setDuration(studyLength))
      }
    }
  };

  const handleDecrease = () => {
    if (!isRunning) {
      if (studyLength > 0 && studyLength === studyDuration) {
        const newDuration = studyLength - 1;
        setStudyLength(newDuration);
        dispatch(decreaseStudy());
      } else {
        dispatch(setDuration(studyLength))
      }
    }
  };


  return (
    <LengthContainer>
      <h2 id="study-length">Study Length</h2>
      <TimerSpan>
        <StyledButton id="break-decrement" onClick={() => {handleDecrease()}}>
          <FaArrowDown />
        </StyledButton>
        <p id="session-length">{studyLength}</p>
        <StyledButton id="session-decrement"onClick={() => {handleIncrease()}}>
          <FaArrowUp />
        </StyledButton>
      </TimerSpan>
    </LengthContainer>
  )
}