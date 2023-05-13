package com.mcthemax.service;

import com.mcthemax.domain.Department;
import com.mcthemax.domain.user.Student;
import com.mcthemax.repository.DepartmentRepository;
import com.mcthemax.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    // signup
    public void save(Department department) {
        departmentRepository.save(department);
    }
}
