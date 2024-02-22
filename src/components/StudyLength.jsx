import { useDispatch, useSelector } from "react-redux";
import { decreaseStudy, increaseStudy } from "../state/reducers/studySlice";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { LengthContainer } from './styled_components/LengthContainer';
import { TimerSpan } from './styled_components/TimerSpan';
import { StyledButton } from './styled_components/StyledButton';

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