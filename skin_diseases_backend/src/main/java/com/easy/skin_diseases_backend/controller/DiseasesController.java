package com.easy.skin_diseases_backend.controller;

import com.easy.skin_diseases_backend.model.Diseases;
import com.easy.skin_diseases_backend.model.WebsiteContent;
import com.easy.skin_diseases_backend.service.DiseasesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/diseases")
@CrossOrigin
public class DiseasesController {
    @Autowired
    private DiseasesService diseasesService;

    @GetMapping("/all")
    public List<Diseases> getAllDiseases(){
        return diseasesService.getAllDiseases();
    }

    @GetMapping("/{title}")
    public ResponseEntity<Diseases> getDiseases(@PathVariable String title) {
        return ResponseEntity.status(HttpStatus.OK).body(diseasesService.getByTitle(title));
    }

    @PostMapping("/add")
    public ResponseEntity<String> addContent(@RequestBody Diseases diseases){
        diseasesService.addDiseases(diseases);
        return ResponseEntity.status(HttpStatus.OK).body("Success add Content.");
    }

    @GetMapping("/count")
    public ResponseEntity<String> getCount(){
        return ResponseEntity.status(HttpStatus.OK).body(diseasesService.getCount());
    }
}
