import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>So why did we make all of these productivity tools?</h2>
                <p>We did it on our quest to learn more, code more, and build for our <a href="https://chingu.io">
                    Chingu</a> voyage. Voyages are free to join and put a team of developers together so they can learn and grow together as developers.  </p>

                <p>We decided to create a few tools that will help you be more productive. On our site you will find: </p>
                <ul type="square">
                    <li><b>To Do List</b>: Add some tasks you'd like to get done today so you don't forget them.</li>
                    <li><b>Pomodoro Clock</b>: This is essentially a task timer. You should commit to a task for at least an hour and work on it in 25 minute increments. Set yourself a break after each 25 minutes. If you break your atttention during any of these 25 minute spans, you must start it over.</li>
                    <li><b>Calculator</b>: Not the best at math? We also created a calculator for you.</li>
                </ul>
            </div>
        );
    }
}

export default Home;