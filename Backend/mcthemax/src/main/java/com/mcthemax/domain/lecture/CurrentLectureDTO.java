package com.mcthemax.domain.lecture;

import lombok.*;

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
    public String lectureTime;
    public String score;
}
