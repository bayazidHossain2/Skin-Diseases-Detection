package com.easy.skin_diseases_backend.controller;


import com.easy.skin_diseases_backend.dto.UserCredintialDTO;
import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
