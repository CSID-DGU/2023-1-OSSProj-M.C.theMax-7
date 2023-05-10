package com.mcthemax.domain.user;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="user")
@Getter @Setter
public class User {

    @Id
    @Column(name="id")
    private Long id;

    @Column(name="pw")
    private String pw;

    @Column(name="name")
    private String name;

    @Column(name="profile")
    private String profile;

    @Column(name="authority")
    @Enumerated(EnumType.STRING)
    private UserStatus authority; //PROFESSOR, STUDENT

}
