package com.mcthemax.repository;

import com.mcthemax.domain.user.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
}