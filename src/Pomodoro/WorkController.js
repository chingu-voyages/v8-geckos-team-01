import React, { Component } from "react";

class WorkController extends Component {
  constructor() {
    super();

    this.state = {
      number: 0
    };

    this.incrementTime = this.incrementTime.bind(this);
  }

  incrementTime() {
    this.setState(prevState => {
      return { number: prevState.number + 1 };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.incrementTime}>Click Me!</button>
      </div>
    );
  }
}

export default WorkController;
