import { useSelector } from 'react-redux';
import { SessionContainer } from './SessionContainer';
import { useState } from 'react';
import { BreakTime } from './BreakTime';
import { StudyTime } from './StudyTime';

export const Session = () => {
  const isBreakTime = useSelector(state => state.break.isBreakTime)

  return (
    <SessionContainer>
      {isBreakTime ? 
      <BreakTime/> :
      <StudyTime />
      }
        
    </SessionContainer>
  )
}
