import React, { useState, useEffect } from "react";

const Timer = (props) => {
    useEffect(() => {
      if (props.secondsLeft > 0 && props.availableNums.length > 0) {
        const timerId = setInterval(() => {
            props.setSecondsLeft(props.secondsLeft - 1);
        }, 1000);
        return () => clearInterval(timerId);
      }
    },
    [props.secondsLeft, props.availableNums.length]);
  
    return (
      <div className="timer">Time Remaining: <span id="timer-number">{props.secondsLeft}</span></div>
    )
};

export default Timer;