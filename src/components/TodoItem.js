// TodoItem.js
import React from "react";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <li
      className={
        "list-group-item mt-2" +
        " " +
        `${todo.completed ? "text-bg-success" : ""}`
      }>
      <input
        type="checkbox"
        class="form-check-input"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button className="btn btn-danger btn-sm" onClick={handleRemove}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
