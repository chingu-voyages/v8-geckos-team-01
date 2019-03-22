import React, { Component } from "react";

const PomodoroButtons = ({ type, value, handleClick }) => {
  return (
    <div className="PomodoroButtons">
      <div>
        <div id={`${type}-label`}>{`${type}`}</div>
        <div className="PomodoroButton-controls">
          <button
            id={`${type}-decrement`}
            onClick={() => handleClick(false, `${type}`)}
          >
            -
          </button>
          <div id={`${type}-length`}>{value}</div>
          <button
            id={`${type}-session`}
            onClick={() => handleClick(true, `${type}`)}
          >
            +
          </button>
        </div>
      </div>
      {/* <button onClick={props.handleClick || props.incrementTime}>+</button>
      
      <button onClick={props.decrementTime}>-</button> */}
    </div>
  );
};

export default PomodoroButtons;
