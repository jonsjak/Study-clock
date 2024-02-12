import { useDispatch, useSelector } from "react-redux";
import { increaseBreak, decreaseBreak } from "../state/reducers/breakSlice";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { LengthContainer } from "./LengthContainer";
import { TimerSpan } from "./TimerSpan";
import { StyledButton } from "./StyledButton";

export const BreakLength = () => {
  const dispatch = useDispatch();
  const breakDuration = useSelector(state => state.break.duration)

  return (
    <LengthContainer>
      <h2>Break Length</h2>
      <TimerSpan>
        <StyledButton onClick={() => dispatch(decreaseBreak())}>
          <FaArrowDown/>
        </StyledButton>
        <p>{breakDuration}</p>
        <StyledButton onClick={() => dispatch(increaseBreak())}>
          <FaArrowUp />
        </StyledButton>
      </TimerSpan>
    </LengthContainer>
  )
}
