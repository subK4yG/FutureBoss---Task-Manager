import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
import AIAssistant from "./AIAssistant";

// Random epic quotes
 const quotes = [
        "A man is made by his actions, not his words. – Mahabharat",
        "Duty before comfort, karma before desire. – Ramayan",
        "Action performed with focus brings clarity.",
        "Complete your karma, fulfill your dharma."
    ];

function TodoWrapper() {
    // Load tasks from LocalStorage
    const initialTodos = JSON.parse(localStorage.getItem("futurebossTodos")) || [];
    const [todos, setTodos] = useState(initialTodos);

    // Karma points (completed tasks)
    const completedCount = todos.filter(todo => todo.completed).length;

    const [quote, setQuote] = useState(quotes[0]);

    useEffect(() => {
        // Save tasks to LocalStorage whenever todos change
        localStorage.setItem("futurebossTodos", JSON.stringify(todos));

        // Change quote randomly when todos change
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, [todos]);

    // Add Todo
    const addTodo = (todoData) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                task: todoData.task,
                priority: todoData.priority || "Medium",
                category: todoData.category || "Work",
                completed: false,
                isEditing: false
            }
        ]);
    };



    // Delete Todo
    const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

    // Toggle Complete Todo
    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        );
    }

    // Edit Todo
    const editTodo = (id) => {
        setTodos(
            todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
        );
    }

    // Edit Task Todo
    const editTask = (task, id) => {
        setTodos(
            todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)
        );
    }

    return (
        <div className="TodoWrapper">
            <h1> FutureBoss – Dharma Task Manager </h1>
            <p className="subheading">{quote}</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#ffca28' }}>
                Total Duties: {todos.length} | Completed Karma Points: {completedCount} ✅
            </p>

            <TodoForm addTodo={addTodo} />
            {/* AI Assistant */}
            <AIAssistant todos={todos} />
            {/* Display Todos */}
            {todos.length === 0 ? (
                <p className="empty-message">No duties assigned yet. Begin your journey of focus and discipline.</p>
            ) : (
                todos.map(todo => todo.isEditing ? (
                    <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                ))
            )}
        </div>
    )
}

export default TodoWrapper;
