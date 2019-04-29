import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Tools from "./Tools";
import Contact from "./Contact";
import ToDoApp from "./ToDoApp"

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Productivity Tools</h1>
                <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/tools">Productivity Tools</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/ToDoApp">To Do List</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/tools" component={Tools} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/ToDoApp" component={ToDoApp} />
                </div>
            </div>
            </HashRouter>
        );
    }y
}

export default Main;