package com.easy.skin_diseases_backend.service.impl;

import com.easy.skin_diseases_backend.dto.UserCredintialDTO;
import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.repository.UserRepository;
import com.easy.skin_diseases_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceIMPL implements UserService {

    @Autowired
    private UserRepository userRepository;




    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }

    @Override
    public User getUserByEmail(UserCredintialDTO userCredintialDTO) {
        User user = userRepository.findByEmail(userCredintialDTO.getEmail());

        return user;
    }
}
