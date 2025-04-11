import React, { useState } from "react";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <span className={todo.completed ? "completed-text" : ""}>
            {todo.text}
          </span>
        )}
      </label>
      <div className="button-group">
        <button  onClick={handleEdit}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
