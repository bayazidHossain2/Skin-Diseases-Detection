package com.easy.skin_diseases_backend.services.impl;

import com.easy.skin_diseases_backend.dto.UserDTO;
import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.repository.UserRepository;
import com.easy.skin_diseases_backend.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserIMPL implements UserServices {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    @Bean
    public String addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUserId(),
                userDTO.getName(),
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword()),
                userDTO.getType()
        );

        userRepository.save(user);

        return user.getName();
    }
}
