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
    public User getUserByEmail(UserCredintialDTO userCredintialDTO, String token) {
        User user = userRepository.findByEmail(userCredintialDTO.getEmail());
        if(user == null){
            return new User();
        }
        user.setToken(token);
        userRepository.save(user);
        return user;
    }

    @Override
    public User getUserByToken(String token) {
        User user = userRepository.findByToken(token);

        return user;
    }

    @Override
    public void setLogout(User user) {
        user.setToken(null);
        userRepository.save(user);
    }
}
