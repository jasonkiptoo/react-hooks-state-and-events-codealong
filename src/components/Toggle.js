import React from "react";
import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const color = isOn ? "red" : "blue";
  const btnClick = () => {
    setIsOn((isOn) => !isOn);
    console.log("i have been Clicked");
  };
  return (
    <button style={{ background: color }} onClick={btnClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
