import React, { Component } from "react";
import Timer from "./Timer";
import WorkController from "./WorkController";

class PomodoroTimer extends Component {
  constructor() {
    super();

    this.state = {
      cycle: "Session",
      time: 25,
      break: 5,
      sound: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Pomodoro Timer!</h1>
        <Timer startCount={this.state.time} />
        <WorkController />
      </div>
    );
  }
}

export default PomodoroTimer;
