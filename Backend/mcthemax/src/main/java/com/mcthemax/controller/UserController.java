package com.mcthemax.controller;

import com.mcthemax.config.JwtTokenProvider;
import com.mcthemax.domain.Department;
import com.mcthemax.domain.response.CommonResult;
import com.mcthemax.domain.response.SingleResult;
import com.mcthemax.domain.user.Professor;
import com.mcthemax.domain.user.Student;
import com.mcthemax.domain.user.User;
import com.mcthemax.domain.user.UserStatus;
import com.mcthemax.service.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.Optional;

import static com.mcthemax.domain.user.UserStatus.PROFESSOR;
import static com.mcthemax.domain.user.UserStatus.STUDENT;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;
    private final StudentService studentService;
    private final DepartmentService departmentService;
    private final ProfessorService professorService;
    private final ResponseService responseService;
    private final JwtTokenProvider jwtTokenProvider;

    // signup
    @PostMapping("/signup")
    public SingleResult<String> saveUser(@RequestBody @Valid CreateUserRequest request) {
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

        return responseService.getSingleResult(String.valueOf(user), 200, "회원가입 성공");
    }

    // login
    @PostMapping("/signin")
    public SingleResult<String> login(@RequestBody @Validated LoginUserRequest request) {
        Long id = request.getId();
        Optional<User> user = userService.findById(id);
        Student student = studentService.findByUser(user);
        if(user.get().getPw().equals(request.getPw())) {
            return responseService.getSingleResult(jwtTokenProvider.createToken(String.valueOf(id), user.get().getAuthority()), 200, "login successed" );

        }

        return responseService.getSingleResult(String.valueOf(user), 403, "login failed");
    }

    @PostMapping("/logout")
    public CommonResult logout() {
        return responseService.getCommonResult(200, "logout succeed");
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
    static class LoginUserRequest {
        private Long id;
        private String pw;
        private UserStatus userStatus;
    }
}
