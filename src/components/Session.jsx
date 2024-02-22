import { useSelector } from 'react-redux';
import { SessionContainer } from './styled_components/SessionContainer';
import { BreakTime } from './BreakTime';
import { StudyTime } from './StudyTime';

export const Session = () => {
  const isBreakTime = useSelector(state => state.break.isBreakTime);

  return (
    <SessionContainer>
      <h2 id="timer-label">{isBreakTime? "Break time!" : "Study session"}</h2>
      <div id="time-left">
        {isBreakTime ? 
        <BreakTime/> :
        <StudyTime />
        }   
      </div>    
    </SessionContainer>
  )
}
