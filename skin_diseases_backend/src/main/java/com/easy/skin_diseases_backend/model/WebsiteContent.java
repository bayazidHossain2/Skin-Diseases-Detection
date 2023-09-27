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
public class WebsiteContent {
    @Id
    @GeneratedValue
    private Long id;
    private String uniqueTitle;
    private String title;
    @Column(name = "content",length = 10000)
    private String content;
}
