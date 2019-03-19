import React, { Component } from "react";

const PomodoroButtons = props => {
  return (
    <div>
      <button onClick={props.incrementTime}>+</button>
      <button onClick={props.decrementTime}>-</button>
    </div>
  );
};

export default PomodoroButtons;
