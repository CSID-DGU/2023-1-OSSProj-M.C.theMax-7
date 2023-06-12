package com.mcthemax.domain.lecture;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mcthemax.domain.Assignment;
import com.mcthemax.domain.user.Student;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="student_lecture")
@Getter @Setter
public class StudentLecture {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="lecture_id")
    private Lecture lecture;

    @Column(name="score")
    private String score;

    @Column(name="midterm_exam")
    private int midtermScore;

    @Column(name="midterm_max")
    private int midtermMax;

    @Column(name="final_exam")
    private int finalScore;

    @Column(name="final_max")
    private int finalMax;

    @Column(name="attendance")
    private int attendanceScore;

    @Column(name="attendance_max")
    private int attendanceMax;

    @Column(name="total")
    private int totalScore;

    @Column(name="assignment")
    private int assignmentScore;

    @OneToMany(mappedBy = "studentLecture")
    private List<Assignment> assignments;

}