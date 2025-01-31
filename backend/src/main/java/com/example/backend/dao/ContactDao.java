package com.example.backend.dao;

import com.example.backend.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContactDao extends JpaRepository<Contact, String> {
    Optional<Contact> findById(String id);
}