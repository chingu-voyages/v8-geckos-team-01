import React from "react";
import './App.css'

function TodoInput({ input, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className= "form" >
      <input type="text" name="" value={input} onChange={handleChange} className = "todoInput"/>
    </form>
  );
}

export default TodoInput;