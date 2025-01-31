import axios from "axios";

const API_BASE_URL = "http://localhost:8080/todos";

export const getTodos = () => {
    return axios.get(API_BASE_URL);
};

export const createTodo = (todo) => {
    return axios.post(API_BASE_URL, todo);
};

export const updateTodo = (id, todo) => {
    return axios.put(`${API_BASE_URL}/${id}`, todo);
};

export const deleteTodo = (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
};