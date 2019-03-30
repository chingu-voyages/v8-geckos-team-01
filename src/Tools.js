import React, { Component } from "react";
import  {BrowserRouter , Route, Link, Switch} from "react-router-dom";

import Todo from './Todo/Todo'

class Tools extends Component {
    render() {
        return (
            <div>
            <div>
                <h2>Productivity Tools</h2>
                <p>Click any of the items below to start being productive:</p>
                <ol>
                    <li>Pomodoro Clock</li>
                    <li><Link exact to="/todo">To Do List</Link></li>
                    <li>Task Timer</li>
                    <li>Coming soon...</li>
                    <li>Also coming soon...</li>
                </ol>
            </div>

            
            <BrowserRouter>
            <Switch>
            <Route exact path = "/todo" Component = {Todo} />
            

            </Switch>
            </BrowserRouter>
            
            </div>
           
        );
    }
}


export default Tools;