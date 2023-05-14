package com.mcthemax.controller;

import com.mcthemax.domain.lecture.CurrentStudentAssignmentDTO;
import com.mcthemax.service.AssignmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AssignmentController {
    private final AssignmentService assignmentService;

    @GetMapping("/assignment/{studentId}/{currentYear}")
    public List<CurrentStudentAssignmentDTO> getAssignmentCurrentSemester (@PathVariable("studentId") Long studentId, @PathVariable("currentYear") String currentYear){
        return assignmentService.getCurrentAssignmentInfo(studentId,currentYear);
    }
}
