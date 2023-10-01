package com.easy.skin_diseases_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackAdminDTO {
    private Long id;
    private String profileUrl;
    private String userName;
    private String time;
    private Long userId;
    private String feedbackText;

    public FeedbackAdminDTO(Long id, String userName, String profileUrl, String time, String feedbackText){
        this.id = id;
        this.userName = userName;
        this.profileUrl = profileUrl;
        this.time = time;
        this.feedbackText = feedbackText;
    }
}
