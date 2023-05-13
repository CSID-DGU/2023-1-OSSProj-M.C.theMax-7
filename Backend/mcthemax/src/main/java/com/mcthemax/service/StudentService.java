package com.mcthemax.service;

import com.mcthemax.domain.user.Student;
import com.mcthemax.domain.user.User;
import com.mcthemax.repository.StudentRepository;
import com.mcthemax.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    // signup
    public void save(Student student) {
        studentRepository.save(student);
    }
}
