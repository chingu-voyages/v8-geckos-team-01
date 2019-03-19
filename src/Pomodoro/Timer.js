import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      count: 100
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h4>Timer</h4>
        <p>Current Time:{count}</p>
      </div>
    );
  }

  componentDidMount() {
    const { startCount } = this.props;
    this.setState({
      count: startCount
    });

    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default Timer;
