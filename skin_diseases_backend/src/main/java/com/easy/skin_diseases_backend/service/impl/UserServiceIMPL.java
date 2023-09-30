package com.easy.skin_diseases_backend.service.impl;

import com.easy.skin_diseases_backend.dto.UserCredintialDTO;
import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.repository.UserRepository;
import com.easy.skin_diseases_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@Service
public class UserServiceIMPL implements UserService {

    @Autowired
    private UserRepository userRepository;




    @Override
    public void addUser(User user) {
        user.setAvailableSearch(3L);
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

    @Override
    public void updateProfile(User user) {
        user.setProfileUrl("Url is set");
        userRepository.save(user);
    }

    @Override
    public User updateUserProfile(Long id, String path) {
        //check Weather the user is in database or not
        User user = userRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user id "+id));

//        deleteUser(id);
        user.setProfileUrl(path);
        userRepository.save(user);
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public String getCount() {
        return ""+userRepository.count();
    }

    @Override
    public void addResearch(String userToken, Integer count) {
        User user = getUserByToken(userToken);
        if(user.getAvailableSearch() == null){
            user.setAvailableSearch(0L);
        }
        user.setAvailableSearch(user.getAvailableSearch() + count);
        userRepository.save(user);
    }


}
