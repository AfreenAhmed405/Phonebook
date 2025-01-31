import React, { useEffect, useRef, useState } from "react";  
import '../styles/App.css';
import { deleteTodo, updateTodo } from '../api';

function ListItem({ item, setTodos }) {

    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.setSelectionRange(
                inputRef.current.value.length,
                inputRef.current.value.length
            );
        }
    }, [editing]);

    function markComplete() {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id
                    ? {...todo, is_completed: !todo.is_completed}
                    : todo
            )
        );

        const toggleCompletion = !item.is_completed;
        const updatedTodo = {id: item.id, title: item.title, is_completed: toggleCompletion}

        updateTodo(item.id, updatedTodo)
            .catch((error) => {
                console.error("Could not update task", error);
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setEditing(false);
        const updatedTodo = {id: item.id, title: e.target.editTodo.value, is_completed: false}

        updateTodo(item.id, updatedTodo)
            .catch((error) => {
                console.error("Could not update task", error);
            });
    }

    function handleUpdate() {
        setEditing(true);
    }

    function handleDelete() {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
        deleteTodo(item.id)
            .catch((error) => {
                console.error("Could not delete task", error);
        });
    }

    function handleInputBlur() {
        setEditing(false);
    }

    function handleInputChange(e) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => todo.id === item.id ? {...todo, title: e.target.value} : todo)
        );
    }

    return (
        <li id={item.id} className="todo_card">
            {
                editing ? (
                    <form className="edit-form" onSubmit={handleSubmit}>
                        <label htmlFor="edit-todo">
                            <input ref={inputRef} type="text" name="edit-todo" id="editTodo" defaultValue={item.title} onBlur={handleInputBlur} onChange={handleInputChange} />
                        </label>
                    </form>
                ) : (
                    <div className="content col-10" onClick={markComplete}>
                        <div className={`check ${item.is_completed ? 'checked' : ''}`}></div>
                        <div className={`todo_text ${item.is_completed ? 'completed' : ''}`}>{item.title}</div>
                    </div>
                )
            }
            <div className="icons col-2">
                <i className="edit fa-regular fa-pen-to-square" onClick={handleUpdate}></i>&nbsp;
                <i className="delete fa-regular fa-trash-can" onClick={handleDelete}></i>
            </div>
        </li>
    );
}

export default ListItem;