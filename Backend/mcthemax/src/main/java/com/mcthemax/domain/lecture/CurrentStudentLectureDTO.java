package com.mcthemax.domain.lecture;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CurrentStudentLectureDTO {
    public Long id;
    private String name;
}
