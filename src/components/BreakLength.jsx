import { useDispatch, useSelector } from "react-redux";
import { increaseBreak, decreaseBreak } from "../state/reducers/breakSlice";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { LengthContainer } from "./styled_components/LengthContainer";
import { TimerSpan } from "./styled_components/TimerSpan";
import { StyledButton } from "./styled_components/StyledButton";
import { useEffect, useState } from "react";
import { resetThunk } from "../state/thunks/resetThunk";

export const BreakLength = () => {
  const dispatch = useDispatch();
  const breakDuration = useSelector(state => state.break.duration);
  const [breakLength, setBreakLength] = useState(breakDuration);

  useEffect(() => {
    const breakIsUp = breakDuration === 0;
    if (breakIsUp) {
      setTimeout(() => setBreakLength(5), 1000)
    }
  }, [breakDuration, dispatch])

  const handleIncrease = () => {
    setBreakLength(breakLength + 1)
    dispatch(increaseBreak())
  }

  const handleDecrease = () => {
    setBreakLength(breakLength > 0 ? breakLength - 1 : breakLength);
    dispatch(decreaseBreak());
  }

  return (
    <LengthContainer>
      <h2 id="break-label">Break Length</h2>
      <TimerSpan>
        <StyledButton onClick={() => handleDecrease()}>
          <FaArrowDown/>
        </StyledButton>
        <p id="break-length">{breakLength}</p>
        <StyledButton onClick={() => handleIncrease()}>
          <FaArrowUp />
        </StyledButton>
      </TimerSpan>
    </LengthContainer>
  )
}
