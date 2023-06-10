package com.mcthemax.controller;

import com.mcthemax.domain.lecture.CurrentLectureDTO;
import com.mcthemax.domain.response.MapResult;
import com.mcthemax.domain.user.Student;
import com.mcthemax.domain.user.User;
import com.mcthemax.service.ResponseService;
import com.mcthemax.service.StudentLectureService;
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
public class CertpiaController {

    private final UserService userService;
    private final StudentService studentService;
    private final ResponseService responseService;
    private final StudentLectureService studentLectureService;

    @GetMapping("/certpia")
    public MapResult getCertpia() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();

        Optional<User> user = userService.findByUsername(id);
        Student student = studentService.findByUser(user);

        HashMap<String, Object> resultMap = new HashMap<>();
        resultMap.put("name", user.get().getName());
        resultMap.put("code", user.get().getId());
        resultMap.put("grade", student.getGrade());
        resultMap.put("department", student.getDepartment().getName());

        List<CurrentLectureDTO> lectures = studentLectureService.GetCurrentCourse(student.getId());
        resultMap.put("lectures", lectures);

        return responseService.getMapResult(resultMap, 200, "ddong");
    }
}
