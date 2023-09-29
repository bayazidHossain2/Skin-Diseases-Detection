package com.easy.skin_diseases_backend.repository;

import com.easy.skin_diseases_backend.model.WebsiteContent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContentRepository extends JpaRepository<WebsiteContent, Long> {
    List<WebsiteContent> findByUniqueTitle(String uniqueTitle);
}
