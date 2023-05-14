package com.mcthemax.service;

import com.mcthemax.domain.user.Student;
import com.mcthemax.domain.user.User;
import com.mcthemax.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    // signup
    public void save(Student student) {
        studentRepository.save(student);
    }

    public Student findByUser(Optional<User> user) {
        Student student = studentRepository.findByUser(user);
        return student;
    }
}
