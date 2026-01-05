import React, { useState } from 'react';

function EditTodoForm({ editTodo, task }) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") return; // prevent empty updates
        editTodo(value, task.id);
    }

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input 
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder="Update your Duty..." 
            />
            <button type="submit" className="todo-btn">
                ✏️ Update Duty
            </button>
        </form>
    )
}

export default EditTodoForm;
