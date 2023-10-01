package com.easy.skin_diseases_backend.repository;

import com.easy.skin_diseases_backend.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
