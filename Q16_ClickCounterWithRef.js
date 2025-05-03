import React, { useRef, useEffect } from 'react';

function ClickCounterWithRef() {
  const countRef = useRef(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  const handleClick = () => {
    countRef.current += 1;
    console.log("Button clicked", countRef.current, "times");
  };

  return <button onClick={handleClick}>Click me!</button>;
}

export default ClickCounterWithRef;