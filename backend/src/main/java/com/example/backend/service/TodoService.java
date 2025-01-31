package com.example.backend.service;

import com.example.backend.dao.TodoDao;
import com.example.backend.model.Todo;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
public class TodoService {

    @Autowired
    TodoDao todoDao;

    public Todo saveTodo(Todo todo) {
        return todoDao.save(todo);
    }

    public List<Todo> getAllTodos() {
        return todoDao.findAll();
    }

    public Todo getTodoById(String id) {
        return todoDao.findById(id).orElseThrow(() -> new RuntimeException("Todo not found"));
    }

    public void deleteTodo(Todo todo) {
        todoDao.delete(todo);
    }
}
