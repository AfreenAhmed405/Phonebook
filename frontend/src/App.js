import Header from './components/Header';
import Manager from './components/Manager';
import Form from './components/Form';
import List from './components/List';
import './styles/App.css';
import {useEffect, useState} from 'react';
import { getTodos } from './api';

function App() {
    const [todos, setTodos]  = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTodos()
            .then((response) => {
                setTodos(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching todos", error);
                setLoading(false);
            });
    }, []);

    const total_todos = todos.length;
    const todos_completed = todos.filter((todo) => todo.is_completed === true).length;

    return (
        <div className="App">
            <Header />
            <Manager todos_completed={todos_completed} total_todos={total_todos}></Manager>
            <Form setTodos={setTodos} />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <List todos={todos} setTodos={setTodos} />
            )}
        </div>
    );
}

export default App;
