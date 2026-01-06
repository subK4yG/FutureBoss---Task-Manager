import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");           
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;                      

    addTodo({
      task,
      priority,
      category
    });

    setTask("");                                   
    setPriority("Medium");
    setCategory("General");                        
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
        placeholder="Enter your Duty..."
      />

      <div className="select-row">
        <div className="select-group">
          <label>Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="select-group">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Work</option>
            <option>Study</option>
            <option>Personal</option>
          </select>
        </div>
      </div>

      <button type="submit" className="todo-btn">
        + Add Duty
      </button>
    </form>
  );
}

export default TodoForm;
