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
    @Column(name = "profileUrl", length = 220)
    private String profileUrl;
    @Column(name = "rememberToken", length = 256)
    private String token;

    private Long availableSearch;

    public Long getAvailableSearch() {
        return availableSearch;
    }

    public void setAvailableSearch(Long availableSearch) {
        this.availableSearch = availableSearch;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getProfileUrl() {
        return profileUrl;
    }

    public void setProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
