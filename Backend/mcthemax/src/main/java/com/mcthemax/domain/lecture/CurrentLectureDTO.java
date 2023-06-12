package com.mcthemax.domain.lecture;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CurrentLectureDTO {
    public Long id;
    public String name;
    public Long grade;
    public String classroom;
    public List lectureTime;
    public String score;
}
