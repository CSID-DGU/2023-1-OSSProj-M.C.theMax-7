package com.mcthemax.repository;

import com.mcthemax.domain.user.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}