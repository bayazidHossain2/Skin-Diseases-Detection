package com.easy.skin_diseases_backend.contorller;

import com.easy.skin_diseases_backend.dto.UserDTO;
import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class HomeController {
    @Autowired
    private UserServices userService;
//    @GetMapping("/")
//    public String welcome() { return "This is Welcome page for all the users."; }
//
//    @GetMapping("/home")
//    public String home(){
//        return "This is home page";
//    }
//
    @GetMapping("/admin")
    public String admin(){
        return  "This is Admin Page";
    }

    @PostMapping("/save-user")
    public String saveUser(@RequestBody User user){
        userService.addUser(user);
        return "success add user";
    }
}
