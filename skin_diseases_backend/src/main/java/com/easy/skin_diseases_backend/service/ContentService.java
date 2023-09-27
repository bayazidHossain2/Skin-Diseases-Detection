package com.easy.skin_diseases_backend.service;

import com.easy.skin_diseases_backend.model.User;
import com.easy.skin_diseases_backend.model.WebsiteContent;

import java.util.List;

public interface ContentService {

    void addContent(WebsiteContent content);

    List<WebsiteContent> getAllContents();

    WebsiteContent getContent(String uniqueName);
}
