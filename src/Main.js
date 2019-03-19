import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Tools from "./Tools";
import Contact from "./Contact";
import Pomodoro from "./Pomodoro";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Productivity Tools</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/tools">Productivity Tools</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/Pomodoro">Pomodoro</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/tools" component={Tools} />
            <Route path="/contact" component={Contact} />
            <Route path="/pomodoro" component={Pomodoro} />
          </div>
        </div>
      </HashRouter>
    );
  }
  y;
}

export default Main;
