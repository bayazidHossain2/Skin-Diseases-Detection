package com.easy.skin_diseases_backend.controller;


import com.easy.skin_diseases_backend.model.Image;
import com.easy.skin_diseases_backend.repository.StorageRepository;
import com.easy.skin_diseases_backend.service.StorageService;
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
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/image")
@CrossOrigin
public class ImageController {
    @Autowired
    private StorageService service;

    @PostMapping
    public ResponseEntity<?> uploadImage(@RequestParam("image")MultipartFile file) throws IOException {
        String uploadImage = service.uploadImage(file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadImage);
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<?> downloadImage(@PathVariable String fileName){
        byte[] imageData = service.downloadImage(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }



    @PostMapping("/profile")
    public ResponseEntity<?> storeProfile(@RequestParam("image") MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Select a valid image.");
        }
        // Set the path to store image
        String imagePath = "src/main/resources/static/images/profile";

        // if the directory doesn't exist then create it
        Path imageDir = Paths.get(imagePath);
        if (!Files.exists(imageDir)) {
            Files.createDirectories(imageDir);
        }
        // Generate a unique file name for the image
        String fileName = "PRO_" + System.currentTimeMillis() + "_" + file.getOriginalFilename();

        // Save the image file using the provided path
        Path targetPath = imageDir.resolve(fileName);
        Files.copy(file.getInputStream(), targetPath);


        // Now, you can save the image information to your image repository (you'll need to adjust this part)
        // Assuming imageRepository is a JpaRepository<Image, Long>
        Image image = new Image(); // Create an instance of your Image entity
        image.setName(fileName); // Set the file name for the image in your entity
        // Set other properties of your Image entity as needed
        service.saveImage(image); // Save the image entity to the repository

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(fileName);
    }

    @GetMapping(value = "/profile", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<?> getProfile(@RequestParam("link") String imagePath) throws IOException {
        // Concatenate the base image path with the relative image path from the request parameter
        String baseImagePath = "src/main/resources/static/images/profile";
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



    @PostMapping("/diseases")
    public ResponseEntity<?> storeDiseases(@RequestParam("image") MultipartFile file) throws IOException {
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


        // Now, you can save the image information to your image repository (you'll need to adjust this part)
        // Assuming imageRepository is a JpaRepository<Image, Long>
        Image image = new Image(); // Create an instance of your Image entity
        image.setName(fileName); // Set the file name for the image in your entity
        // Set other properties of your Image entity as needed
        service.saveImage(image); // Save the image entity to the repository

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(fileName);
    }

    @GetMapping(value = "/diseases", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<?> getDiseases(@RequestParam("link") String imagePath) throws IOException {
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
    @PostMapping("/save")
    public ResponseEntity<?> addImage(@RequestParam("image") MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "select an image");
            return ResponseEntity.badRequest().body(errorResponse);
        }
        // Set the path to store image
        String imagePath = "src/main/resources/static/images/search";

        // if the directory doesn't exist then create it
        Path imageDir = Paths.get(imagePath);
        if (!Files.exists(imageDir)) {
            Files.createDirectories(imageDir);
        }
        // Generate a unique file name for the image
        String fileName = "PRO" + System.currentTimeMillis() + "_" + file.getOriginalFilename();

        // Save the image file using the provided path
        Path targetPath = imageDir.resolve(fileName);
        Files.copy(file.getInputStream(), targetPath);


        // Now, you can save the image information to your image repository (you'll need to adjust this part)
        // Assuming imageRepository is a JpaRepository<Image, Long>
        Image image = new Image(); // Create an instance of your Image entity
        image.setName(fileName); // Set the file name for the image in your entity
        // Set other properties of your Image entity as needed
        service.saveImage(image); // Save the image entity to the repository


        Map<String, Object> response = new HashMap<>();
        response.put("successfully added image ", fileName);

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(response);
    }

    @GetMapping(value = "/get", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<?> showImage(@RequestParam("link") String imagePath) throws IOException {
        // Concatenate the base image path with the relative image path from the request parameter
        String baseImagePath = "src/main/resources/static/images/profile";
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
