package com.example.backend.controller;

import com.example.backend.model.Todo;
import com.example.backend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    TodoService todoService;

    @GetMapping()
    public ResponseEntity<List<Todo>> getAllTodos() {
        return new ResponseEntity<>(todoService.getAllTodos(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable String id) {
        return new ResponseEntity<>(todoService.getTodoById(id), HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity<String> deleteTodo(@RequestBody Todo todo) {
        todoService.deleteTodo(todo);
        return new ResponseEntity<>("Deleted successfully.", HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Todo> saveTodo(@RequestBody Todo todo) {
        return new ResponseEntity<>(todoService.saveTodo(todo), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String id, @RequestBody Todo todo) {
        todo.setId(id);
        return new ResponseEntity<>(todoService.saveTodo(todo), HttpStatus.OK);
    }

}