package com.easy.skin_diseases_backend.controller;

import com.easy.skin_diseases_backend.dto.TokenDTO;
import com.easy.skin_diseases_backend.model.Token;
import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/token")
@CrossOrigin
public class TokenController {
    @Autowired
    private TokenService tokenService;

    @PostMapping("/add")
    public ResponseEntity<?> addToken(@RequestBody TokenDTO tokenDTO){
        tokenService.addToken(tokenDTO);
        return ResponseEntity.status(HttpStatus.OK).body("Token added success.");
    }
    @GetMapping("/all")
    public ResponseEntity<List<Token>> getAllTokens(){
        return ResponseEntity.status(HttpStatus.OK).body(tokenService.getAll());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteToken(@PathVariable Long id){
        tokenService.deleteToken(id);

        return ResponseEntity.noContent().build();
    }
}
