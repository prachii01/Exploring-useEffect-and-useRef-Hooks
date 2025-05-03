import React, { useState, useRef } from 'react';

function FixedTimer() {
  const [time, setTime] = useState(10);
  const intervalId = useRef(null);

  const startTimer = () => {
    if (intervalId.current) return;
    intervalId.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  const resetTimer = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setTime(10);
  };

  return (
    <div>
      <h1>Time Left: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default FixedTimer;