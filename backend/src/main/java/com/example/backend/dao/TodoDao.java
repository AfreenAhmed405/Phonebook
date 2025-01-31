package com.example.backend.dao;

import com.example.backend.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TodoDao extends JpaRepository<Todo, String> {
    Optional<Todo> findById(String id);
}
