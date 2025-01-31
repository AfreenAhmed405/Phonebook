import Header from './components/Header';
import Manager from './components/Manager';
import Form from './components/Form';
import List from './components/List';
import './styles/App.css';
import {useState} from 'react';

function App() {
    const [todos, setTodos]  = useState([]);

    const total_todos = todos.length;
    const todos_completed = todos.filter((todo) => todo.is_completed === true).length;

    return (
        <div className="App">
            <Header />
            <Manager todos_completed={todos_completed} total_todos={total_todos}></Manager>
            <Form setTodos={setTodos} />
            <List todos={todos} setTodos={setTodos} ></List>
        </div>
    );
}

export default App;
