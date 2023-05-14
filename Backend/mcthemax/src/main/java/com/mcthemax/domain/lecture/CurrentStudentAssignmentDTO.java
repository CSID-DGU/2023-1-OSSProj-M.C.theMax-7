package com.mcthemax.domain.lecture;

import com.mcthemax.domain.AssignmentStatus;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CurrentStudentAssignmentDTO {
    private Long id;
    private String assignmentName;
    private String lectureName;
    private AssignmentStatus assignmentStatus;
}
