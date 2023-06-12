package com.mcthemax.domain.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class EclassLectureInfoResponse {
    private Long id;
    private String lectureCode;
    private String lectureName;
    private String professor;
}
