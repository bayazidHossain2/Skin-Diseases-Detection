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
public class Diseases {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    @Column(length = 10000)
    private String description;
    private String moreLink;
    private String imageUrl;
}
