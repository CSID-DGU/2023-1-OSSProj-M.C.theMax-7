package com.mcthemax.service;

import com.mcthemax.domain.lecture.CurrentStudentLectureDTO;
import com.mcthemax.domain.lecture.StudentLecture;
import com.mcthemax.repository.LectureRepository;
import com.mcthemax.repository.StudentLectureRepository;
import com.mcthemax.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class StudentLectureService {
    private final StudentLectureRepository studentLectureRepository;
    private final StudentRepository studentRepository;
    private final LectureRepository lectureRepository;

    @PersistenceContext
    private EntityManager entityManager;
    /**
     * 수강신청
     */
    @Transactional
    public Long registerClassInfo (Long student_id, Long lecture_id){

        // 학생별 수업 강의 정보 입력
        StudentLecture studentLecture = new StudentLecture();

        // Lecture 및 Student 조회시, 객체가 존재한다면 주입
        studentRepository.findById(student_id)
                        .ifPresent(student -> studentLecture.setStudent(student));
        lectureRepository.findById(lecture_id)
                .ifPresent(lecture -> studentLecture.setLecture(lecture));
        studentLectureRepository.save(studentLecture);
        return studentLecture.getId();
    }
    /**
     * 현학기 수강정보 가져오기
     */
    @Transactional(readOnly = true)
    public List<CurrentStudentLectureDTO> GetCurrentSemesterCourse(Long student_id, String lectureYear){

        String jpql = "SELECT s1 " +
                "FROM StudentLecture s1 " +
                "JOIN s1.student s " +
                "JOIN s1.lecture l " +
                "WHERE s.id = :student_id " +
                "AND s.semester = l.semester " +
                "AND l.lectureYear = :lecture_year";

        TypedQuery<StudentLecture> query = entityManager.createQuery(
                jpql,
                StudentLecture.class);
        query.setParameter("student_id",student_id);
        query.setParameter("lecture_year",lectureYear);
        List<StudentLecture> sl = query.getResultList();
        List<CurrentStudentLectureDTO> result = new ArrayList<>();
        for (StudentLecture studentlecture : sl ){
            CurrentStudentLectureDTO c = CurrentStudentLectureDTO.builder()
                    .id(studentlecture.getId())
                    .name(studentlecture.getLecture().getName())
                    .build();
            result.add(c);
        }
        return result;
    }
}
