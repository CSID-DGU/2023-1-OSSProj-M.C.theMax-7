package com.mcthemax.domain;

import com.mcthemax.domain.lecture.StudentLecture;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@Entity
@Table(name="student_assignment")
@Getter
@Setter
public class Assignment {
    @Builder
    public Assignment() {
    }

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "assignment_id")
    private StudentLecture studentLecture;

    @Column(name="assignment_name")
    private String name;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private AssignmentStatus status; // TODO, DOING, DONE

    @Column(name="max_score")
    private int max_score;

    @Column(name="score")
    private int score;

    @Column(name="due_date")
    private LocalDateTime dueDate;

}