import React, { useRef } from 'react';

function OTPInput() {
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, e) => {
    if (e.target.value && index < 3) {
      inputs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0) {
      inputs[index - 1].current.focus();
    }
  };

  return (
    <div>
      {inputs.map((ref, i) => (
        <input
          key={i}
          ref={ref}
          type="text"
          maxLength="1"
          onChange={(e) => handleChange(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          style={{ width: "2rem", marginRight: "0.5rem", textAlign: "center" }}
        />
      ))}
    </div>
  );
}

export default OTPInput;