package com.mcthemax.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="department")
@Getter @Setter
public class Department {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="department_code")
    private Long id;

    @Column(name="department_name")
    private String name;

}