import React from "react";

const PomodoroButtons = ({ type, value, handleClick }) => {
  return (
    <div className="PomodoroButtons">
      <div>
        {/* Takes the type from props.type and looks what kind of button will be used.
        on the OnClick function, it looks what type the button is, and depening on the type,
        will decrement or increment the number on the screen.
        The props.value is the number that will be incremented. */}
        <div id={`${type}-label`} className="buttonss">
          {type === "session" ? "Session" : "Break"}
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
