package com.mcthemax.service;

import com.mcthemax.domain.Assignment;
import com.mcthemax.domain.lecture.*;
import com.mcthemax.domain.user.Student;
import com.mcthemax.repository.AssignmentRepository;
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
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class StudentLectureService {
    private final StudentLectureRepository studentLectureRepository;
    private final StudentRepository studentRepository;
    private final LectureRepository lectureRepository;
    private final AssignmentRepository assignmentRepository;

    @PersistenceContext
    private EntityManager entityManager;
    /**
     * 학생 별 모든 강의 정보 가져오기
     */
    public List<StudentLecture> findAll (Long student_id){
        Optional<Student> student = studentRepository.findById(student_id);
        return studentLectureRepository.findAllByStudent(student);
    }

    public Optional<StudentLecture> findById (Long lecture_id) {
        Optional<StudentLecture> studentLecture = studentLectureRepository.findById(lecture_id);
        return studentLecture;
    }
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

    @Transactional
    public List<CurrentLectureDTO> GetCurrentCourse(Long student_id) {
        String jpql = "SELECT s1 " +
                "FROM StudentLecture s1 " +
                "JOIN s1.student s " +
                "JOIN s1.lecture l " +
                "WHERE s.id = :student_id " +
                "AND s.semester = l.semester ";

        TypedQuery<StudentLecture> query = entityManager.createQuery(
                jpql,
                StudentLecture.class);
        query.setParameter("student_id",student_id);
        List<StudentLecture> sl = query.getResultList();
        List<CurrentLectureDTO> result = new ArrayList<>();
        for (StudentLecture studentlecture : sl ){
            CurrentLectureDTO c = CurrentLectureDTO.builder()
                    .id(studentlecture.getLecture().getId())
                    .name(studentlecture.getLecture().getName())
                    .grade(studentlecture.getLecture().getGrade())
                    .classroom(studentlecture.getLecture().getClassroom())
                    .lectureTime(studentlecture.getLecture().getLectureTime())
                    .score(studentlecture.getScore())
                    .build();
            result.add(c);
        }
        return result;
    }

    @Transactional
    public List<CurrentScoreDTO> GetCurrentScore(Long student_id) {
        String jpql = "SELECT s1 " +
                "FROM StudentLecture s1 " +
                "JOIN s1.student s " +
                "JOIN s1.lecture l " +
                "WHERE s.id = :student_id ";

        TypedQuery<StudentLecture> query = entityManager.createQuery(
                jpql,
                StudentLecture.class);
        query.setParameter("student_id",student_id);
        List<StudentLecture> sl = query.getResultList();
        List<CurrentScoreDTO> result = new ArrayList<>();
        for (StudentLecture studentlecture : sl ) {
            List<Assignment> assignments = studentlecture.getAssignments();
            List<CurrentStudentAssignmentDTO> currentStudentAssignments = new ArrayList<>();
            for (Assignment assignment : assignments) {
                CurrentStudentAssignmentDTO currentStudentAssignmentDTO = new CurrentStudentAssignmentDTO();
                currentStudentAssignmentDTO.setId(assignment.getId());
                currentStudentAssignmentDTO.setAssignmentName(assignment.getName());
                currentStudentAssignmentDTO.setScore(assignment.getScore());
                currentStudentAssignmentDTO.setMax_score(assignment.getMax_score());
                currentStudentAssignments.add(currentStudentAssignmentDTO);
            }
            CurrentScoreDTO c = CurrentScoreDTO.builder()
                    .num(studentlecture.getLecture().getCode())
                    .name(studentlecture.getLecture().getName())
                    .grade(studentlecture.getLecture().getGrade())
                    .attendence(studentlecture.getAttendanceScore())
                    .attendence_max(studentlecture.getAttendanceMax())
                    .midterm(studentlecture.getMidtermScore())
                    .midterm_max(studentlecture.getMidtermMax())
                    .fin(studentlecture.getFinalScore())
                    .fin_max(studentlecture.getFinalMax())
                    .assignments(currentStudentAssignments)
                    .professor(studentlecture.getLecture().getP_name())
                    .score(studentlecture.getScore())
                    .build();
            result.add(c);
        }
        return result;
    }
}
