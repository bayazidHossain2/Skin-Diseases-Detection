package com.easy.skin_diseases_backend.service;

import com.easy.skin_diseases_backend.dto.TokenDTO;
import com.easy.skin_diseases_backend.model.Token;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TokenService {
    void addToken(TokenDTO tokenDTO);

    List<Token> getAll();

    void deleteToken(Long id);

    Token getTokenByToken(String token);

    Integer getCount();
}
