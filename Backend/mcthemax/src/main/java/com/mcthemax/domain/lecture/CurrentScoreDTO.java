package com.mcthemax.domain.lecture;

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
    public int attendence_max;
    public int midterm;
    public int midterm_max;
    public int fin;
    public int fin_max;
    public String professor;
    public String score;
    public List<CurrentStudentAssignmentDTO> assignments;
}
