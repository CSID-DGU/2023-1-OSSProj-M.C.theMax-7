package com.mcthemax.service;

import com.mcthemax.domain.Assignment;
import com.mcthemax.domain.lecture.CurrentStudentAssignmentDTO;
import com.mcthemax.domain.lecture.CurrentStudentLectureDTO;
import com.mcthemax.domain.lecture.StudentLecture;
import com.mcthemax.repository.AssignmentRepository;
import com.mcthemax.repository.StudentLectureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class AssignmentService {
    private final AssignmentRepository assignmentRepository;
    private final StudentLectureRepository studentLectureRepository;
    /**
     * 내 과제 정보 가져오기
     */
    @Transactional(readOnly = true)
    public List<CurrentStudentAssignmentDTO> getCurrentAssignmentInfo (Long student_id, String currentYear){
        List<StudentLecture> currentStudentLectures = studentLectureRepository.findByStudentIdAndLectureYear(student_id,currentYear);
        List<CurrentStudentAssignmentDTO> currentStudentAssignments = new ArrayList<>();
        for (StudentLecture currentStudentLecture : currentStudentLectures) {
            List<Assignment> assignments = currentStudentLecture.getAssignments();
            for (Assignment assignment : assignments) {
                CurrentStudentAssignmentDTO currentStudentAssignment = new CurrentStudentAssignmentDTO();
                currentStudentAssignment.setId(assignment.getId());
                currentStudentAssignment.setAssignmentName(assignment.getName());
                currentStudentAssignment.setLectureName(currentStudentLecture.getLecture().getName());
                currentStudentAssignment.setAssignmentStatus(assignment.getStatus());
                currentStudentAssignment.setDueDate(assignment.getDueDate());
                currentStudentAssignments.add(currentStudentAssignment);
            }
        }
        return currentStudentAssignments;
    }

}
