import React from "react";
import ListItem from "./ListItem";

function List({ todos, setTodos }) {

    return (
        <ol className="todo_list">
            { todos && todos.length > 0 ? (
                todos.map((item) => <ListItem key={item.id} item={item} setTodos={setTodos} ></ListItem>)
            ) : (
                <p>Seems lonely in here, what are you upto?</p>
            )}
        </ol>
    ); 
}

export default List;