package com.mcthemax.repository;

import com.mcthemax.domain.lecture.StudentLecture;
import com.mcthemax.domain.user.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface StudentLectureRepository extends JpaRepository<StudentLecture, Long> {

    List<StudentLecture> findAllByStudent(Optional<Student> student);

    @Query("SELECT s1 " +
            "FROM StudentLecture s1 " +
            "JOIN s1.student s " +
            "JOIN s1.lecture l " +
            "WHERE s.id = :student_id " +
            "AND s.semester = l.semester " +
            "AND l.lectureYear = :lecture_year")
    List<StudentLecture> findByStudentIdAndLectureYear(Long student_id, String lecture_year);
}