package com.mcthemax.domain.user;

import com.mcthemax.domain.Department;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="professor")
@Getter @Setter
public class Professor {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "code")
    private User user;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "department_code")
    private Department department;

    @Column(name="e_mail")
    private String email;
}
