package com.easy.skin_diseases_backend.services.impl;

import com.easy.skin_diseases_backend.dto.UserDTO;
import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.repository.UserRepository;
import com.easy.skin_diseases_backend.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;


@Service
public class UserIMPL implements UserServices {
    @Autowired
    private UserRepository userRepository;

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }
}
