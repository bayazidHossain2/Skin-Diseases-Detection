package com.easy.skin_diseases_backend.repository;

import com.easy.skin_diseases_backend.model.Token;
import com.easy.skin_diseases_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token, Long> {
    Token findByToken(String token);
}
