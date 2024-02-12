import React from 'react';
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";

export const ClockStarter = () => {
  const startClock = () => {
    console.log('started!')
  }
  const pauseClock = () => {
    console.log('paused!')
  }
  const resetClock = () => {
    console.log('paused!')
  }

  return (
    <div style={{ display: 'flex', gap: '50px' }}>
      <FaPlayCircle onClick={startClock()} />
      <FaPauseCircle onClick={pauseClock()} />
      <FaArrowsRotate onClick={resetClock()}/>
    </div>
  )
}
