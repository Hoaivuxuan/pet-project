import React, { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "read the book (at least 5 pages)", completed: false },
    { id: 2, text: "buy dog food", completed: false },
    { id: 3, text: "call my parents", completed: false },
    { id: 4, text: "clean my working place", completed: false },
    { id: 5, text: "kill Dill", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const removeChecked = () => {
    const filtered = todos.filter((todo) => !todo.completed);
    setTodos(filtered);
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, newText) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updated);
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="app-container">
      <h1 className="title">TODO LIST</h1>
      <div className="todo-card">
        <div className="input-row">
          <input
            type="text"
            className="new-task-input"
            placeholder="what needs to be done?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="add-btn" onClick={handleAddTask}>
            +
          </button>
        </div>

        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />

        <div className="bottom-row">
          <span className="task-status">
            {completedCount} of {totalCount} tasks done
          </span>
          <button className="remove-btn" onClick={removeChecked}>
            Remove checked
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
