import React, { Component } from "react";
import PomodoroButtons from "./PomodoroButtons";

class WorkController extends Component {
  constructor() {
    super();

    this.state = {
      session: 25,
      break: 5
    };

    this.incrementTime = this.incrementTime.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
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

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
        <PomodoroButtons
          incrementTime={this.incrementTime}
          decrementTime={this.decrementTime}
        />
      </div>
    );
  }
}

export default WorkController;
