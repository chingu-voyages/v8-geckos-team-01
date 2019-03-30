import React, {Component} from "react";

// import { render } from "react-dom";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import './App.css'

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, name: "Eat sushi", completed: false },
        { id: 2, name: "Kill Itachi", completed: false }
      ],
      input: "",
      nextId: 3
    };
  }
  handleChange = e => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  handleSubmit = e => {
    // const {input,todos} = this.state
    // todos.map((todo) => {
    e.preventDefault();
    const { input } = this.state;
    const newTodo = { id: this.state.nextId, name: input, completed: false };
    this.setState({
      input: "",
      todos: [...this.state.todos, newTodo],
      nextId: this.state.nextId + 1
    });
  };

  handleDelete = id => {
    const { todos } = this.state;
    const filteredTodos = todos.filter(todo => todo.id !== id);
    this.setState({
      todos: filteredTodos
    });
  };

  handleToggle = id => {
    const { todos } = this.state;

    const toggledTodos = todos.map(todo => {
      console.log(todo.completed);
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    this.setState({ todos: toggledTodos });
  };
  render() {
    return (
      
      <div className="App">
      <div className="header">
         <header>
      
      <h1>todo <span>List</span></h1>
      <h2> A simple todo list</h2>
      </header>
        <TodoInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          input={this.state.input}
        />
        
          <TodoItem
            state={this.state}
            handleDelete={this.handleDelete}
            handleToggle={this.handleToggle}
          />
        
      </div>
      </div>
    );
  }
}

export default TodoApp;



