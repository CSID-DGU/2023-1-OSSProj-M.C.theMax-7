package com.mcthemax.domain.lecture;

import com.mcthemax.domain.Department;
import com.mcthemax.domain.user.Professor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="lecture")
@Getter @Setter
public class Lecture {

    @Id @GeneratedValue
    @Column(name="id")
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "professor_id")
    private Professor professor;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "department_code")
    private Department department;

    @Column(name="grade")
    private Long grade;

    @Column(name="classroom")
    private String classroom;

    @Column(name="division")
    private String division;

    @Column(name="lecture_time")
    private String lectureTime;

    @Column(name="lecture_year")
    private String lectureYear;

    @Column(name="semester")
    private String semester;

    @Column(name="student_full")
    private int studentFull;


}