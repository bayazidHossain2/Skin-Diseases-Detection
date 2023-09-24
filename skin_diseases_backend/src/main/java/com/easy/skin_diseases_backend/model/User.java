package com.easy.skin_diseases_backend.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
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
    @Column(name = "dob", length = 256)
    private String dob;
    @Column(name = "password", length = 256)
    private String password;
    @Column(name = "role", length = 20)
    private String role;

}
