import { useDispatch, useSelector } from "react-redux";
import { decreaseStudy, increaseStudy } from "../state/reducers/studySlice";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { LengthContainer } from './LengthContainer';
import { TimerSpan } from './TimerSpan';
import { StyledButton } from './StyledButton';

export const StudyLength = () => {
  const studyDuration = useSelector(state => state.study.duration);
  const dispatch = useDispatch();

  return (
    <LengthContainer>
      <h2 id="study-length">Study Length</h2>
      <TimerSpan>
        <StyledButton id="break-decrement" onClick={() => dispatch(decreaseStudy())}>
          <FaArrowDown />
        </StyledButton>
        <p id="session-length">{studyDuration}</p>
        <StyledButton id="session-decrement"onClick={() => dispatch(increaseStudy())}>
          <FaArrowUp />
        </StyledButton>
      </TimerSpan>
    </LengthContainer>
  )
}