package com.easy.skin_diseases_backend.repository;

import com.easy.skin_diseases_backend.model.ImageData;
import com.easy.skin_diseases_backend.model.WebsiteContent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContentRepository extends JpaRepository<WebsiteContent, Long> {
    Optional<WebsiteContent> findByUniqueTitle(String uniqueTitle);
}
