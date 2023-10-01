package com.easy.skin_diseases_backend.service.impl;

import com.easy.skin_diseases_backend.dto.FeedbackAdminDTO;
import com.easy.skin_diseases_backend.dto.FeedbackDTO;
import com.easy.skin_diseases_backend.model.Feedback;
import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.repository.FeedbackRepository;
import com.easy.skin_diseases_backend.repository.UserRepository;
import com.easy.skin_diseases_backend.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class FeedbackServiceIMPL implements FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void addFeedback(FeedbackDTO feedbackDTO) {
        Feedback feedback = new Feedback();
        feedback.setUserId(feedbackDTO.getUserId());
        feedback.setFeedbackText(feedbackDTO.getFeedbackText());
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        feedback.setTime(myDateObj.format(myFormatObj));

        feedbackRepository.save(feedback);
    }

    @Override
    public List<FeedbackDTO> getAllFeedback() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        List<FeedbackDTO> feedbackDTOS = new ArrayList<>();
        for(Feedback feedback : feedbackList){
            User user = userRepository.findById(feedback.getUserId())
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user id " + feedback.getUserId()));
            feedbackDTOS.add(
                    new FeedbackDTO(
                            user.getName(),
                            user.getProfileUrl(),
                            feedback.getTime(),
                            feedback.getFeedbackText()
                    )
            );
        }
        return feedbackDTOS;
    }

    @Override
    public List<FeedbackAdminDTO> getAllFeedbackAdmin() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        List<FeedbackAdminDTO> feedbackAdminDTOS = new ArrayList<>();
        for(Feedback feedback : feedbackList){
            User user = userRepository.findById(feedback.getUserId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user id " + feedback.getUserId()));
            feedbackAdminDTOS.add(
                    new FeedbackAdminDTO(
                            feedback.getId(),
                            user.getName(),
                            user.getProfileUrl(),
                            feedback.getTime(),
                            feedback.getFeedbackText()
                    )
            );
        }
        return feedbackAdminDTOS;
    }

    @Override
    public Long getCount() {
        return feedbackRepository.count();
    }

    @Override
    public void deleteFeedback(Long id) {
        feedbackRepository.deleteById(id);
    }
}
