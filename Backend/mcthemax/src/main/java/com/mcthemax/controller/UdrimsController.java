package com.mcthemax.controller;

import com.mcthemax.domain.response.ListResult;
import com.mcthemax.domain.response.UserInfoResponse;
import com.mcthemax.domain.user.Student;
import com.mcthemax.domain.user.User;
import com.mcthemax.service.DepartmentService;
import com.mcthemax.service.ResponseService;
import com.mcthemax.service.StudentService;
import com.mcthemax.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UdrimsController {
    private final UserService userService;
    private final ResponseService responseService;
    private final DepartmentService departmentService;
    private final StudentService studentService;

    @GetMapping("/udrims/auth")
    public UserInfoResponse getAuth() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();

        Optional<User> user = userService.findByUsername(id);

        return new UserInfoResponse(user.get().getId(), user.get().getAuthority(), user.get().isCredentialsNonExpired());
    }

    @GetMapping("/udrims/info")
    public ListResult getInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();

        Optional<User> user = userService.findByUsername(id);
        Student student = studentService.findByUser(user);

        List<Object> resultList = new ArrayList<>();
        resultList.add(user.get().getId());
        resultList.add(user.get().getName());
        resultList.add(student.getGrade());
        resultList.add(student.getDepartment().getName());
        resultList.add(user.get().getAuthority());
        return responseService.getListResult(resultList, 200, "test");
    }
}
