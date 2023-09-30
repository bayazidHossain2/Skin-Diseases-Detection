package com.easy.skin_diseases_backend.controller;

import com.easy.skin_diseases_backend.model.Image;
import com.easy.skin_diseases_backend.model.SearchHistory;
import com.easy.skin_diseases_backend.service.SearchHistoryService;
import com.easy.skin_diseases_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/history")
@CrossOrigin
public class SearchHistoryController {
    @Autowired
    private SearchHistoryService searchHistoryService;
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<?> addHistory(@RequestBody SearchHistory history){
        searchHistoryService.addHistory(history);
        userService.useSearch(history.getUserId());
        return ResponseEntity.status(HttpStatus.OK).body("History add Success");
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(searchHistoryService.getHistoryById(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteHistory(@PathVariable Long id) {
        searchHistoryService.deletById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Delete Success");
    }

    @GetMapping("/count")
    public ResponseEntity<?> getCount() {
        return ResponseEntity.status(HttpStatus.OK).body(searchHistoryService.getCount());
    }

    @GetMapping("/countByName")
    public ResponseEntity<?> getGroupCount() {
        return ResponseEntity.status(HttpStatus.OK).body(searchHistoryService.getCountByName());
    }



    @PostMapping("/image")
    public ResponseEntity<?> storeImage(@RequestParam("file") MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Select a valid image.");
        }
        // Set the path to store image
        String imagePath = "src/main/resources/static/images/diseases";
        // if the directory doesn't exist then create it
        Path imageDir = Paths.get(imagePath);
        if (!Files.exists(imageDir)) {
            Files.createDirectories(imageDir);
        }
        // Generate a unique file name for the image
        String fileName = "DIS_" + System.currentTimeMillis() + "_" + file.getOriginalFilename();
        // Save the image file using the provided path
        Path targetPath = imageDir.resolve(fileName);
        Files.copy(file.getInputStream(), targetPath);

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(fileName);
    }

    @GetMapping(value = "/image", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<?> getImage(@RequestParam("link") String imagePath) throws IOException {
        // Concatenate the base image path with the relative image path from the request parameter
        String baseImagePath = "src/main/resources/static/images/diseases";
        Path imageFilePath = Paths.get(baseImagePath, imagePath);

        if (!Files.exists(imageFilePath)) {
            return ResponseEntity.notFound().build();
        }
        // Read the image file as a Resource and set appropriate headers
        Resource imageResource = new UrlResource(imageFilePath.toUri());
        String contentType = Files.probeContentType(imageFilePath);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .body(imageResource);
    }
}
