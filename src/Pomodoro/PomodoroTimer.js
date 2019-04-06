import React, { Component } from "react";
import moment from "moment";
import Timer from "./Timer";
import PomodoroButtons from "./PomodoroButtons";
import "./Pomodoro.css";

import Controls from "./Controls";

class PomodoroTimer extends Component {
  constructor() {
    super();

    this.state = {
      session: 25,
      break: 5,
      mode: "session",
      active: false
    };

    // Binding the functions to this.state
    this.handleSetTimer = this.handleSetTimer.bind(this);
  }

  // increments or decrements the type depending on the type that is in the []
  // in PomodoroButton.js you can put false or true in the function, to know what type will be called
  handleSetTimer(inc, type) {
    if (this.state[type] === 60 && inc) return;
    if (this.state[type] === 1 && !!inc) return;
    this.setState({ [type]: this.state[type] + (inc ? 1 : -1) });
  }

  render() {
    return (
      <div className="all-content">
        <h1 className="p-title">Pomodoro Timer!</h1>

        <div className="button-settings">
          <PomodoroButtons
            type="break"
            handleClick={this.handleSetTimer}
            value={this.state.break}
          />
          <PomodoroButtons
            type="session"
            handleClick={this.handleSetTimer}
            value={this.state.session}
          />
        </div>
        <Timer
          mode={this.state.mode}
          // used import moment here, to get the miliseconds from this.state.mind in mm:ss format.
          time={moment(this.state.time).format("mm:ss")}
        />
        <Controls active={this.state.active} />
      </div>
    );
  }
}

export default PomodoroTimer;
