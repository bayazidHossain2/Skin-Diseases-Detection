package com.easy.skin_diseases_backend.controller;


import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.model.WebsiteContent;
import com.easy.skin_diseases_backend.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/content")
@CrossOrigin
public class WebsiteContentController {

    @Autowired
    private ContentService service;

    @GetMapping("/all")
    public List<WebsiteContent> getAllWebsiteContent(){
        return service.getAllContents();
    }

    @GetMapping("/get")
    public WebsiteContent getUser(@RequestParam String uniqueName){
        return service.getContent(uniqueName);
    }

    @PostMapping("/add")
    public String addContent(@RequestBody WebsiteContent content){
        service.addContent(content);
        return "Success add Content.";
    }
}
