package com.easy.skin_diseases_backend.service.impl;

import com.easy.skin_diseases_backend.dto.TokenDTO;
import com.easy.skin_diseases_backend.model.Token;
import com.easy.skin_diseases_backend.repository.TokenRepository;
import com.easy.skin_diseases_backend.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class TokenServiceIMPL implements TokenService {
    @Autowired
    private TokenRepository tokenRepository;
    @Override
    public void addToken(TokenDTO tokenDTO) {
        Token tok = new Token();
        tok.setToken(tokenDTO.getToken());
        tok.setCount(tokenDTO.getCount());
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        tok.setTime(myDateObj.format(myFormatObj));
        tokenRepository.save(tok);
    }

    @Override
    public List<Token> getAll() {
        return tokenRepository.findAll();
    }

    @Override
    public void deleteToken(Long id) {
        tokenRepository.deleteById(id);
    }

    @Override
    public Token getTokenByToken(String token) {
        return tokenRepository.findByToken(token);
    }
}
