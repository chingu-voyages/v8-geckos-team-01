import React, { Component } from "react";
import  {BrowserRouter , Route, Link, Switch} from "react-router-dom";

import TodoApp from './Todo/TodoApp'
import PomodoroApp from './Pomodoro/PomodoroApp'


class Tools extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
            <div>
                <h2>Productivity Tools</h2>
                <p>Click any of the items below to start being productive:</p>
                <ol>
                    <li><Link  to="/pomodoro" exact>Pomodoro Clock </Link></li>
                    <li><Link to="/todo" exact >To Do List</Link></li>
                    <li><Link  to="/calculator" exact>Calculator </Link></li>
                    <li>Coming soon...</li>
                    <li>Also coming soon...</li>
                </ol>
            </div>

            
            
            <div>
            <Switch>
            <Route exact path = "/todo" component = {TodoApp} />
            <Route exact path = "/pomodoro" component = {PomodoroApp} />
            </Switch>
            </div>
            
            
            </div>
            </BrowserRouter>
           
        );
    }
}


export default Tools;