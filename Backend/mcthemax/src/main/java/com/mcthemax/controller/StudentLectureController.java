package com.mcthemax.controller;

import com.mcthemax.domain.lecture.CurrentStudentLectureDTO;
import com.mcthemax.service.StudentLectureService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class StudentLectureController {
    private final StudentLectureService studentLectureService;

    @PostMapping("/studentLecture/{studentId}/{lectureId}")
    public RegisterStudentLectureResponse saveStudentLecture (@PathVariable("studentId") Long studentId, @PathVariable("lectureId") Long lectureId){
        Long id = studentLectureService.registerClassInfo(studentId,lectureId);
        return new RegisterStudentLectureResponse(id);
    }
    @GetMapping("/studentLecture/{studentId}/{currentYear}")
    public List<CurrentStudentLectureDTO> getStudentLectureCurrentClassInfo (@PathVariable("studentId") Long studentId, @PathVariable("currentYear") String currentYear){
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
