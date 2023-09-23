package com.easy.skin_diseases_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "name", length = 256)
    private String name;
    @Column(name = "email", length = 256)
    private String email;
    @Column(name = "password", length = 256)
    private String password;
    @Column(name = "role", length = 20)
    private String role;
}
