import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo({ task, deleteTodo, editTodo, toggleComplete }) {
  return (
    <div className="Todo">
        {/* Task Text */}
        <p 
          className={`${task.completed ? "completed" : "incompleted"}`} 
          onClick={() => toggleComplete(task.id)}
          title="Click to Complete Karma"
        >
          {task.task} {task.completed ? "✅" : ""}
        </p>

        {/* Action Icons */}
        <div>
            <FontAwesomeIcon 
                className="edit-icon" 
                icon={faPenToSquare} 
                onClick={() => editTodo(task.id)}
                title="Edit Duty ✏️"
            />
            <FontAwesomeIcon 
                className="delete-icon" 
                icon={faTrash} 
                onClick={() => deleteTodo(task.id)}
                title="Remove Duty 🗑️"
            />
        </div>
    </div>
  )
}

export default Todo;
