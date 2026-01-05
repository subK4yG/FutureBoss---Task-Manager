import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") return; // prevent empty duties
        addTodo(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input 
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder="Enter your Duty..." 
            />
            <button type="submit" className="todo-btn">
                ➕ Add Duty
            </button>
        </form>
    )
}

export default TodoForm;
