import React, { Component } from "react";
import Timer from "./Timer";
import WorkController from "./WorkController";

class PomodoroTimer extends Component {
  render() {
    return (
      <div>
        <h1>Pomodoro Timer!</h1>
        <Timer />
        <WorkController />
      </div>
    );
  }
}

export default PomodoroTimer;
