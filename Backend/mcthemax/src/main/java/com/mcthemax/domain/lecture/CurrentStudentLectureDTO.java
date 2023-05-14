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
    public Long id;
    private String name;
}
