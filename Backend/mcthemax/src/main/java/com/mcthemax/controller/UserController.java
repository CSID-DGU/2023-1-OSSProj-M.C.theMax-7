package com.mcthemax.controller;

import com.mcthemax.domain.Department;
import com.mcthemax.domain.user.Professor;
import com.mcthemax.domain.user.Student;
import com.mcthemax.domain.user.User;
import com.mcthemax.domain.user.UserStatus;
import com.mcthemax.repository.UserRepository;
import com.mcthemax.service.DepartmentService;
import com.mcthemax.service.ProfessorService;
import com.mcthemax.service.StudentService;
import com.mcthemax.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.security.auth.login.LoginException;
import javax.validation.Valid;
import javax.validation.constraints.Null;

import java.util.Optional;

import static com.mcthemax.domain.user.UserStatus.PROFESSOR;
import static com.mcthemax.domain.user.UserStatus.STUDENT;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final StudentService studentService;
    private final DepartmentService departmentService;
    private final ProfessorService professorService;

    // signup
    @PostMapping("/signup")
    public CreateUserResponse saveUser(@RequestBody @Valid CreateUserRequest request) {
        User user = request.getUser();
        Department department = request.getDepartment();

        departmentService.save(department);
        Long id = userService.save(user);

        if (user.getAuthority() == STUDENT) {
            Student student = new Student();
            student.setUser(user);
            student.setDepartment(department);
            student.setGrade(request.getGrade());
            student.setSemester(request.getSemester());
            studentService.save(student);
        }

        if (user.getAuthority() == PROFESSOR) {
            Professor professor = new Professor();
            professor.setUser(user);
            professor.setDepartment(department);
            professor.setEmail(request.getEmail());
            professorService.save(professor);
        }

        return new CreateUserResponse(id);
    }


    @Data
    static class CreateUserRequest {
        private User user;
        private Long grade;
        private Department department;
        private int semester;
        private String email;
    }

    @Data
    private class CreateUserResponse {
        private Long id;

        public CreateUserResponse(Long id){
            this.id = id;
        }
    }
}
