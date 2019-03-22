import React, { Component } from "react";
import Timer from "./Timer";
import WorkController from "./WorkController";
import PomodoroButtons from "./PomodoroButtons";
import "./Pomodoro.css";
import moment from "moment";
import Controls from "./Controls";

class PomodoroTimer extends Component {
  constructor() {
    super();

    this.state = {
      session: 25,
      break: 5,
      mode: "session",
      time: 25 * 60 * 1000,
      active: false
    };

    this.incrementTime = this.incrementTime.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
    this.handleSetTimer = this.handleSetTimer.bind(this);
  }

  incrementTime() {
    this.setState(prevState => {
      return { time: prevState.session + 1 };
    });
  }

  decrementTime() {
    this.setState(prevState => {
      return { time: prevState.session - 1 };
    });
  }

  handleSetTimer(inc, type) {
    this.setState({ [type]: this.state[type] + (inc ? 1 : -1) });
  }

  render() {
    return (
      <div>
        <h1>Pomodoro Timer!</h1>
        {/* <Timer startCount={this.state.time} />
        <WorkController time={this.state.time} /> */}

        <div className="settings">
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
          time={moment(this.state.time).format("mm:ss")}
        />
        <Controls active={this.state.active} />
      </div>
    );
  }
}

export default PomodoroTimer;
