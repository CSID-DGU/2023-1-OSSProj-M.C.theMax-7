package com.mcthemax.domain.lecture;

import com.mcthemax.domain.Assignment;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CurrentStudentLectureDTO {
    private Long id;
    private String name;
    private String lectureCode;
    private String lectureName;
    private String professor;

}
