import { useDispatch, useSelector } from "react-redux";
import { increaseBreak, decreaseBreak } from "../state/reducers/breakSlice";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { LengthContainer } from "./styled_components/LengthContainer";
import { TimerSpan } from "./styled_components/TimerSpan";
import { StyledButton } from "./styled_components/StyledButton";

export const BreakLength = () => {
  const dispatch = useDispatch();
  const breakDuration = useSelector(state => state.break.duration)

  return (
    <LengthContainer>
      <h2 id="break-label">Break Length</h2>
      <TimerSpan>
        <StyledButton onClick={() => dispatch(decreaseBreak())}>
          <FaArrowDown/>
        </StyledButton>
        <p id="break-length">{breakDuration}</p>
        <StyledButton onClick={() => dispatch(increaseBreak())}>
          <FaArrowUp />
        </StyledButton>
      </TimerSpan>
    </LengthContainer>
  )
}
