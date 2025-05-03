import React, { useState, useEffect } from 'react';

function TrackStateChange() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("State updated:", number);
  }, [number]);

  const handleClick = () => {
    setNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <p>Current Number: {number}</p>
      <button onClick={handleClick}>Generate Random Number</button>
    </div>
  );
}

export default TrackStateChange;