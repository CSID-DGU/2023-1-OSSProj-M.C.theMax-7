package com.mcthemax.repository;

import com.mcthemax.domain.user.Student;
import com.mcthemax.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByUser(Optional<User> user);
}