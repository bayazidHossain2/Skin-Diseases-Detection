package com.easy.skin_diseases_backend.services;

import com.easy.skin_diseases_backend.dto.UserDTO;
import org.springframework.stereotype.Service;

@Service
public interface UserServices {
    String addUser(UserDTO userDTO);
}
