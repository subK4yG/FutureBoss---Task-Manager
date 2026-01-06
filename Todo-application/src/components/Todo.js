import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ task, deleteTodo, editTodo, toggleComplete }) {
  return (
    <div className="Todo">
      
      {/* Left Side: Task + Badges */}
      <div className="todo-content">
        <p
          className={task.completed ? "completed" : "incompleted"}
          onClick={() => toggleComplete(task.id)}
          title="Click to Complete Karma"
        >
          {task.task} {task.completed ? "✅" : ""}
        </p>

        {/* Priority & Category Badges */}
        <div className="badge-row">
          {task.priority && (
            <span className={`badge priority ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          )}

          {task.category && (
            <span className="badge category">
              {task.category}
            </span>
          )}
        </div>
      </div> {/* CLOSED todo-content */}

      {/* Right Side: Icons */}
      <div className="todo-actions">
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
  );
}

export default Todo;
