package com.mcthemax.domain;

import javax.persistence.*;

@Entity
@Table(name="department")
public class Department {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="department_code")
    private Long id;

    @Column(name="department_name")
    private String name;

}