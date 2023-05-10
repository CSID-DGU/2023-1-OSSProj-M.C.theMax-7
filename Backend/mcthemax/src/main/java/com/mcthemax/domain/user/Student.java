package com.mcthemax.domain.user;

import com.mcthemax.domain.Department;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="student")
@Getter @Setter
public class Student {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "code")
    private User user;

    @Column(name="grade")
    private Long grade;

    @ManyToOne
    @JoinColumn(name = "department_code")
    private Department department;

}
