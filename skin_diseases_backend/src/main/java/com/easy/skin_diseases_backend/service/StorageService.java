package com.easy.skin_diseases_backend.service;

import com.easy.skin_diseases_backend.model.ImageData;
import com.easy.skin_diseases_backend.repository.StorageRepository;
import com.easy.skin_diseases_backend.util.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Service
public class StorageService {

    @Autowired
    private StorageRepository repository;

    public String uploadImage(MultipartFile file) throws IOException {
        try{
            ImageData imageData = repository.save(ImageData.builder()
                    .name("IMG"+System.currentTimeMillis()+file.getOriginalFilename() )
                    .type(file.getContentType())
                    .imageData(ImageUtils.compressImage(file.getBytes())).build());

            if(imageData != null){
                return "File upload Successfully : "+imageData.getName();
            }else return "File Upload Fail to save";
        }catch (Exception ex) {
            return "Exception : "+ex.getMessage();
        }
    }

    public byte[] downloadImage(String fileName){
        Optional<ImageData> dbImageData =  repository.findByName(fileName);
        byte[] images = ImageUtils.decompressImage(dbImageData.get().getImageData());
        return images;
    }
}
