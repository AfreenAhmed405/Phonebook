package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="todos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name="id", unique = true, nullable = false, updatable = false)
    private String id;

    private String title;

    @JsonProperty("is_completed")
    private boolean isCompleted;
}
