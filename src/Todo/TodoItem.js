import React from "react";

function TodoItem(props) {
  const { todos } = props.state;
  const { handleDelete, handleToggle } = props;
  // const style ={textDecoration}
  const todoItem = todos.map(todo => {
    return (
      <li
        key={todo.id}
        style={
          todo.completed
            ? { textDecoration: "underline" }
            : { textDecoration: "none" }
            
        }
        className = "list task"
      >
        {" "}
        <span onClick={() => handleToggle(todo.id)} className="task"> {todo.name} </span>
        <span onClick={() => handleDelete(todo.id)} className="span"> X </span>{" "}
      </li>
    );
  });

  return todoItem;
}

export default TodoItem;