package com.mcthemax.repository;

import com.mcthemax.domain.lecture.StudentLecture;
import com.mcthemax.domain.user.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StudentLectureRepository extends JpaRepository<StudentLecture, Long> {

    List<StudentLecture> findAllByStudent(Student student);
}