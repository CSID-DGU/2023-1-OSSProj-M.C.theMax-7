package com.mcthemax.repository;

import com.mcthemax.domain.lecture.StudentLecture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentLectureRepository extends JpaRepository<StudentLecture, Long> {
}