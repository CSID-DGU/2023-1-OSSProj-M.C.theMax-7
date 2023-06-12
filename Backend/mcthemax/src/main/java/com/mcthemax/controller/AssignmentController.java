package com.mcthemax.controller;

import com.mcthemax.domain.Assignment;
import com.mcthemax.domain.AssignmentStatus;
import com.mcthemax.domain.PatchAssignmentDTO;
import com.mcthemax.domain.lecture.CurrentStudentAssignmentDTO;
import com.mcthemax.domain.response.CommonResult;
import com.mcthemax.domain.user.Student;
import com.mcthemax.domain.user.User;
import com.mcthemax.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class AssignmentController {
    private final AssignmentService assignmentService;
    private final UserService userService;
    private final StudentService studentService;
    private final ResponseService responseService;

    @GetMapping("/assignment/{currentYear}")
    public List<CurrentStudentAssignmentDTO> getAssignmentCurrentSemester (@PathVariable("currentYear") String currentYear){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();

        Optional<User> user = userService.findByUsername(id);
        Student student = studentService.findByUser(user);
        Long studentId = student.getId();

        return assignmentService.getCurrentAssignmentInfo(studentId,currentYear);
    }

    @PatchMapping("/assignment/move")
    public CommonResult patchAssignmentStatus(@RequestBody PatchAssignmentDTO patchAssignmentDTO) {

        Long id = patchAssignmentDTO.getId();
        AssignmentStatus status = patchAssignmentDTO.getAssignmentStatus();
        Optional<Assignment> assignment = assignmentService.patchAssignment(id, status);

        return responseService.getCommonResult(200, "assignment patched");
    }
}
