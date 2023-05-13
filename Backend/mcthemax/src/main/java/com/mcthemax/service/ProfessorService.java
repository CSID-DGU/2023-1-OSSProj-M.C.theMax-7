package com.mcthemax.service;

import com.mcthemax.domain.user.Professor;
import com.mcthemax.domain.user.Student;
import com.mcthemax.repository.ProfessorRepository;
import com.mcthemax.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfessorService {

    @Autowired
    private ProfessorRepository professorRepository;

    // signup
    public Long save(Professor professor) {
        professorRepository.save(professor);
        return professor.getId();
    }
}
