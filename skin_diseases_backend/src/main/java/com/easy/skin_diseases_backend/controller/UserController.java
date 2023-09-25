package com.easy.skin_diseases_backend.controller;


import com.easy.skin_diseases_backend.dto.UserCredintialDTO;
import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String addUser(@RequestBody User user){
        userService.addUser(user);
        return "Success add user.";
    }

    @PostMapping("/get")
    public User getUserByEmail(@RequestBody UserCredintialDTO userCredintialDTO){
        User user = userService.getUserByEmail(userCredintialDTO);
        return user;
    }

}
