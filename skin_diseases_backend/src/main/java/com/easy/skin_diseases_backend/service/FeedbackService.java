package com.easy.skin_diseases_backend.service;

import com.easy.skin_diseases_backend.dto.FeedbackAdminDTO;
import com.easy.skin_diseases_backend.dto.FeedbackDTO;

import java.util.List;

public interface FeedbackService {
    void addFeedback(FeedbackDTO feedbackDTO);

    List<FeedbackDTO> getAllFeedback();

    void deleteFeedback(Long id);

    List<FeedbackAdminDTO> getAllFeedbackAdmin();

    Long getCount();
}
