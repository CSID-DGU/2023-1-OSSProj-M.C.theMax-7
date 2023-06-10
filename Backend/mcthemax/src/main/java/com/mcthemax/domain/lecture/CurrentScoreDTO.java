package com.mcthemax.domain.lecture;

import com.mcthemax.domain.Assignment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class CurrentScoreDTO {
    public String num;
    public String name;
    public Long grade;
    public int attendence;
    public int midterm;
    public int fin;
    public List<CurrentStudentAssignmentDTO> assignments;
}
