package com.easy.skin_diseases_backend.controller;

import com.easy.skin_diseases_backend.service.ML_ModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/search")
@CrossOrigin
public class SearchController {
    @Autowired
    private ML_ModelService mlModelService;

    @PostMapping("/predict")
    public ResponseEntity<?> predict(@RequestParam("image") MultipartFile file) throws IOException {
//        str.subscribe(
//                result -> {
//                    // Handle the result here
//                    System.out.println("----------Received result: " + result);
//                    // You can send the result to a view or return it as needed
//                },
//                error -> {
//                    // Handle errors here
//                    System.err.println("----------Error occurred: " + error.getMessage());
//                }
//        );

        return ResponseEntity.status(HttpStatus.OK)
                .body(mlModelService.predict(file));
    }

}
