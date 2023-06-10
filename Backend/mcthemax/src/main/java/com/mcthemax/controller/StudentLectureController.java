package com.mcthemax.controller;

import com.mcthemax.domain.lecture.CurrentStudentLectureDTO;
import com.mcthemax.domain.user.Student;
import com.mcthemax.domain.user.User;
import com.mcthemax.service.StudentLectureService;
import com.mcthemax.service.StudentService;
import com.mcthemax.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class StudentLectureController {
    private final StudentLectureService studentLectureService;
    private final UserService userService;
    private final StudentService studentService;

    @PostMapping("/studentLecture/{studentId}/{lectureId}")
    public RegisterStudentLectureResponse saveStudentLecture (@PathVariable("studentId") Long studentId, @PathVariable("lectureId") Long lectureId){
        Long id = studentLectureService.registerClassInfo(studentId,lectureId);
        return new RegisterStudentLectureResponse(id);
    }
    @GetMapping("/studentLecture/{currentYear}")
    public List<CurrentStudentLectureDTO> getStudentLectureCurrentClassInfo (@PathVariable("currentYear") String currentYear){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();

        Optional<User> user = userService.findByUsername(id);
        Student student = studentService.findByUser(user);
        Long studentId = student.getId();

        return studentLectureService.GetCurrentSemesterCourse(studentId,currentYear);
    }
    @Data
    static class RegisterStudentLectureResponse {
        private Long id;
        public RegisterStudentLectureResponse(Long id){
            this.id = id;
        }
    }

}
