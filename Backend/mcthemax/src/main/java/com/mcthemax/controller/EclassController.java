package com.mcthemax.controller;


import com.mcthemax.domain.lecture.CurrentStudentAssignmentDTO;
import com.mcthemax.domain.lecture.CurrentStudentLectureDTO;
import com.mcthemax.domain.response.EclassLectureInfoResponse;
import com.mcthemax.domain.response.ListResult;
import com.mcthemax.domain.user.Student;
import com.mcthemax.domain.user.User;
import com.mcthemax.service.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class EclassController {
    private final UserService userService;
    private final StudentService studentService;
    private final StudentLectureService studentLectureService;
    private final ResponseService responseService;
    private final AssignmentService assignmentService;
    /**
     *
     * 현재 년도 수강중인 강의 정보 로드
     *
     */
    @GetMapping("/eclass/lecture/{currentYear}")
    public ListResult<EclassLectureInfoResponse> getEclassLecture (@PathVariable("currentYear") String currentYear){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();

        Optional<User> user = userService.findByUsername(id);
        Student student = studentService.findByUser(user);
        Long studentId = student.getId();

        List<CurrentStudentLectureDTO> currentLectureDTOList = studentLectureService.GetEclassCurrentSemesterCourse(studentId,currentYear);
        List<EclassLectureInfoResponse> result = currentLectureDTOList.stream()
                .map(c -> new EclassLectureInfoResponse(c.getId(),c.getLectureCode(),c.getName(),c.getProfessor()))
                .collect(Collectors.toList());

        return responseService.getListResult(result,200,"test");
    }
    /**
     * 이클래스란 이번 학기 총 과제 정보
     */
    @GetMapping("/eclass/assignments/{currentYear}")
    public ListResult<CurrentStudentAssignmentDTO> getEclassAssignment(@PathVariable("currentYear") String currentYear){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();
        System.out.println(id);
        Optional<User> user = userService.findByUsername(id);
        Student student = studentService.findByUser(user);
        Long studentId = student.getId();

        return responseService.getListResult(assignmentService.getCurrentAssignmentInfo(studentId,currentYear),200,"test");
    }
    /**
     * 이클래스란 이번 학기 강의별 과제 정보
     */
    @GetMapping("/eclass/assignment/{currentYear}")
    public ListResult<CurrentStudentAssignmentDTO> getEclassByAssignment(@PathVariable("currentYear") String currentYear, @RequestBody @Validated LectureUserRequest request){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();

        Optional<User> user = userService.findByUsername(id);
        Student student = studentService.findByUser(user);
        Long studentId = student.getId();

        String lectureName = request.getName();

        List<CurrentStudentAssignmentDTO> currentStudentAssignmentDTOList = assignmentService.getCurrentAssignmentInfo(studentId,currentYear);
        List<CurrentStudentAssignmentDTO> result = currentStudentAssignmentDTOList.stream()
                .filter(c -> {
                    if(c.getLectureName().equals(lectureName)){
                        return true;
                    }else{
                        return false;
                    }
                })
                .collect(Collectors.toList());

        return responseService.getListResult(result,200,"test");
    }

    @Data
    static class LectureUserRequest{
        private String name;
    }
}
