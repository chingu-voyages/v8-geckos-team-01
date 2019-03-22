import React from "react";

const PomodoroButtons = ({ type, value, handleClick }) => {
  return (
    <div className="PomodoroButtons">
      <div>
        <div id={`${type}-label`} className="buttonss">
          {`${type}`}
          <div className="PomodoroButton-controls">
            <button
              id={`${type}-decrement`}
              className="timeButton"
              onClick={() => handleClick(false, `${type}`)}
            >
              -
            </button>
            <div id={`${type}-length`}>{value}</div>
            <button
              id={`${type}-session`}
              className="timeButton"
              onClick={() => handleClick(true, `${type}`)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroButtons;
