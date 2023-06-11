package com.mcthemax.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PatchAssignmentDTO {
    public Long id;
    private AssignmentStatus assignmentStatus;
}
