package com.easy.skin_diseases_backend.controller;

import com.easy.skin_diseases_backend.dto.TokenDTO;
import com.easy.skin_diseases_backend.dto.UseTokenDTO;
import com.easy.skin_diseases_backend.model.Token;
import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.service.TokenService;
import com.easy.skin_diseases_backend.service.UserService;
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

    @Autowired
    private UserService userService;

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

    @PostMapping("/getResearch")
    public ResponseEntity<?> getResearch(@RequestBody UseTokenDTO useTokenDTO){
        Token token = tokenService.getTokenByToken(useTokenDTO.getToken());
        if (token == null){
            return ResponseEntity.status(HttpStatus.BAD_GATEWAY).build();
        }
        userService.addResearch(useTokenDTO.getUserToken(), token.getCount());

        deleteToken(token.getId());

        return ResponseEntity.status(HttpStatus.OK).body("Token Research Success.");
    }

    @GetMapping("/count")
    public ResponseEntity<Integer> getCount() {
        return ResponseEntity.status(HttpStatus.OK).body(tokenService.getCount());
    }
}
