import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ToDoApp from "./ToDoApp";
import Pomodoro from "./Pomodoro";
import Calculator from "./Calculator"

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Productivity Tools</h1>
                <ul className="header">
                        <li><NavLink exact to="/About">About</NavLink></li>
                        <li><NavLink to="/ToDoApp">To Do List</NavLink></li>
                        <li><NavLink to="/Pomodoro">Pomodoro Clock</NavLink></li>
                        <li><NavLink to="/Calculator">Calculator</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/About" component={About} />
                    <Route path="/ToDoApp" component={ToDoApp} />
                    <Route path="/Pomodoro" component={Pomodoro} />
                    <Route path="/Calculator" component={Calculator} />
                    <Route path="/contact" component={Contact} />
                </div>
            </div>
            </HashRouter>
        );
    }y
}

export default Main;