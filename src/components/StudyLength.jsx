import { useDispatch, useSelector } from "react-redux";
import { decreaseStudy, increaseStudy } from "../state/reducers/studySlice";

export const StudyLength = () => {
  //default study length
  const dispatch = useDispatch();
  const studyDuration = useSelector(state => state.study.duration);
  // insert button icons
  const downIcon = "down icon";
  const upIcon = "up icon";

  return (
    <>
      <h2>StudyLength</h2>
      <span>
        <button onClick={() => dispatch(decreaseStudy())}>{downIcon}</button>
        <p>{studyDuration}</p>
        <button onClick={() => dispatch(increaseStudy())}>{upIcon}</button>
      </span>
    </>
  )
}
