package com.easy.skin_diseases_backend.service.impl;

import com.easy.skin_diseases_backend.model.WebsiteContent;
import com.easy.skin_diseases_backend.repository.ContentRepository;
import com.easy.skin_diseases_backend.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ContentServiceIMPL implements ContentService {
    @Autowired
    private ContentRepository repository;

    @Override
    public void addContent(WebsiteContent content) {
        repository.save(content);
    }



    @Override
    public List<WebsiteContent> getAllContents() {
        return repository.findAll();
    }

    @Override
    public List<WebsiteContent> getContent(String uniqueName) {
        return repository
                .findByUniqueTitle(uniqueName);
    }

    @Override
    public void deleteContent(Long id) {
        repository.deleteById(id);
    }
}
