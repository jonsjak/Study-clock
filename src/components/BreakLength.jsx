import { useDispatch, useSelector } from "react-redux";
import { increaseBreak, decreaseBreak } from "../state/reducers/breakSlice";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { LengthContainer } from "./styled_components/LengthContainer";
import { TimerSpan } from "./styled_components/TimerSpan";
import { StyledButton } from "./styled_components/StyledButton";
import { useEffect, useState } from "react";

export const BreakLength = () => {
  const dispatch = useDispatch();
  const initialDuration = useSelector(state => state.break.duration);
  const [breakLength, setBreakLength] = useState(initialDuration);
  const isBreakTime = useSelector(state => state.break.isBreakTime);
  const isResetting = useSelector(state => state.study.isResetting);

  // resets the breakLenght when clock reaches 0 or is reset by other comp
  useEffect(() => {
    const breakIsUp = (isResetting || isBreakTime);
    if (breakIsUp) {
      setBreakLength(initialDuration);
    };
  }, [initialDuration, isBreakTime, isResetting])

  //adding time
  const handleIncrease = () => {
    if (breakLength < 60) setBreakLength(breakLength + 1);
    dispatch(increaseBreak());
  }
  //subtract time
  const handleDecrease = () => {
    setBreakLength(breakLength > 1 ? breakLength - 1 : breakLength);
    dispatch(decreaseBreak());
  }

  return (
    <LengthContainer>
      <h2 id="break-label">Break Length</h2>
      <TimerSpan>
        <StyledButton id="break-decrement" onClick={() => handleDecrease()}>
          <FaArrowDown/>
        </StyledButton>
        <p id="break-length">{breakLength}</p>
        <StyledButton id="break-increment" onClick={() => handleIncrease()}>
          <FaArrowUp />
        </StyledButton>
      </TimerSpan>
    </LengthContainer>
  )
}
