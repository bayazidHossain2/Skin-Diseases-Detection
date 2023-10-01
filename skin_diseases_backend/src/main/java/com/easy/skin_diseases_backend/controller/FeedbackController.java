package com.easy.skin_diseases_backend.controller;

import com.easy.skin_diseases_backend.dto.FeedbackAdminDTO;
import com.easy.skin_diseases_backend.dto.FeedbackDTO;
import com.easy.skin_diseases_backend.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
@CrossOrigin
public class FeedbackController {
    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/add")
    public ResponseEntity<?> addFeedback(@RequestBody FeedbackDTO feedbackDTO){
        feedbackService.addFeedback(feedbackDTO);
        return ResponseEntity.status(HttpStatus.OK).body("Feedback added Success.");
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllFeedback(){
        return ResponseEntity.status(HttpStatus.OK).body(feedbackService.getAllFeedback());
    }

    @GetMapping("/admin/all")
    public ResponseEntity<List<FeedbackAdminDTO>> getAllFeedbackAdmin(){
        return ResponseEntity.status(HttpStatus.OK).body(feedbackService.getAllFeedbackAdmin());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteFeedback(@PathVariable Long id){
        feedbackService.deleteFeedback(id);
        return ResponseEntity.status(HttpStatus.OK).body("Delete Success");
    }

    @GetMapping("/count")
    public ResponseEntity<Long> getCount(){
        return ResponseEntity.status(HttpStatus.OK).body(feedbackService.getCount());
    }
}
