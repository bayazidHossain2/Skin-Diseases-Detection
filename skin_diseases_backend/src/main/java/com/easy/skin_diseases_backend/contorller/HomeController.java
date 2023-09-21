package com.easy.skin_diseases_backend.contorller;

import com.easy.skin_diseases_backend.dto.UserDTO;
import com.easy.skin_diseases_backend.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class HomeController {
    @Autowired
    private UserServices userServices;
    @GetMapping("/welcome")
    public String welcome() { return "This is Welcome page for all the users. "; }

    @GetMapping("/home")
    public String home(){
        return "This is home page";
    }

    @GetMapping("/admin")
    public String admin(){
        return  "This is Admin Page";
    }

    @PostMapping(path = "/save-user")
    public String saveUser(@RequestBody UserDTO userDTO){
        String id = userServices.addUser(userDTO);
        return id;
    }
}
