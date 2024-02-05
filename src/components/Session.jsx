import React from 'react'
import { useSelector } from 'react-redux'

export const Session = () => {
  //replace with time from redux state
  const sessionTime = useSelector(state => state.study.duration)
  
  return (
    <div>
        <h2>Session</h2>
        <h2>{sessionTime}</h2>
    </div>
  )
}
