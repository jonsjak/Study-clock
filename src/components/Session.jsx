import React from 'react'

export const Session = () => {
  //replace with time from redux state
  const timeLeft = 25;
  
  return (
    <div>
        <h2>Session</h2>
        <h2>{timeLeft}</h2>
    </div>
  )
}
