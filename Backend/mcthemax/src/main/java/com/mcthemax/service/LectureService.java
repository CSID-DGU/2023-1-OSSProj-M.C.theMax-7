package com.mcthemax.service;

import com.mcthemax.domain.lecture.Lecture;
import com.mcthemax.repository.LectureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LectureService {

    @Autowired
    private LectureRepository lectureRepository;

    public Optional<Lecture> findById(Long id) {
        Optional<Lecture> lecture = lectureRepository.findById(id);
        return lecture;
    }
}
