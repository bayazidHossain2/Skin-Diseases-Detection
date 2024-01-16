package com.easy.skin_diseases_backend.service;

import com.easy.skin_diseases_backend.dto.UserCredintialDTO;
import com.easy.skin_diseases_backend.model.User;

import java.util.List;

public interface UserService {
    void addUser(User user);

    User getUserByEmail(UserCredintialDTO userCredintialDTO, String token);

    User getUserByToken(String token);

    void setLogout(User user);

    void updateProfile(User user);

    User updateUserProfile(Long id, String path);

    List<User> getAllUsers();

    String getCount();

    void addResearch(String userToken, Integer count);

    Long getAvailebaleSearch(Long id);

    void useSearch(Long userId);

    void deleteUser(Long id);
}
