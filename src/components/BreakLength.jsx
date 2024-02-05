import { useDispatch, useSelector } from "react-redux";
import { increaseBreak, decreaseBreak } from "../state/reducers/breakSlice";


export const BreakLength = () => {
  const dispatch = useDispatch();
  const breakDuration = useSelector(state => state.break.duration)
  // insert button icons
  const downIcon = "down icon";
  const upIcon = "up icon";

  return (
    <>
      <h2>Break Length</h2>
      <span>
        <button onClick={() => dispatch(decreaseBreak())}>{downIcon}</button>
        <p>{breakDuration}</p>
        <button onClick={() => dispatch(increaseBreak())}>{upIcon}</button>
      </span>
    </>
  )
}
