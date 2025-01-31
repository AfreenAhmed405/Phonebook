import React from "react";
import '../styles/App.css';      

function Form({ setTodos }) {

    function generateId() {
        return Math.floor(Date.now() + Math.random() * 1000000);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const value = e.target.todo.value;

        setTodos((prevTodos) => [
            ...prevTodos,
            { id: generateId(), title: value, is_completed: false }
        ]);
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