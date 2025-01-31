package com.example.backend.service;

import com.example.backend.dao.ContactDao;
import com.example.backend.model.Contact;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class ContactService {

    @Autowired
    private final ContactDao contactDao;

    public void createContact(Contact contact) {
        contactDao.save(contact);
    }

    public Page<Contact> getAllContacts(int page, int size) {
        return contactDao.findAll(PageRequest.of(page, size, Sort.by("name")));
    }

    public Contact getContactById(String id) {
        return contactDao.findById(id).orElseThrow(() -> new RuntimeException("Contact not found"));
    }

    public void updateContact(Contact newContact) {
        Contact contact = contactDao.findById(newContact.getId()).orElseThrow(() -> new RuntimeException("Contact not found"));
        contact.setName(newContact.getName());
        contact.setEmail(newContact.getEmail());
        contact.setPhone(newContact.getPhone());
        contact.setTitle(newContact.getTitle());
        contact.setAddress(newContact.getAddress());
        contactDao.save(contact);
    }

    public void deleteContact(Contact contact) {
        contactDao.delete(contact);
    }
}