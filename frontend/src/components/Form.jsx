import React from "react";
import '../styles/App.css';
import { createTodo } from '../api';

function Form({ setTodos }) {

    function handleSubmit(e) {
        e.preventDefault();
        const newTodo = {title: e.target.todo.value, is_completed: false}

        createTodo(newTodo)
            .then((response) => {
                setTodos((prevTodos) => [
                    ...prevTodos, response.data
                ]);
            }).catch((error) => {
                console.error("Could not create task", error);
            });
        e.target.reset();
    }

    return (
        <form className="todo_form" onSubmit={handleSubmit}>
            <input className="todo_input" type="text" id="todo" placeholder="Write your next task"></input>
            <button className="todo_submit" type="submit">+</button>
        </form>        
    );
}

export default Form;