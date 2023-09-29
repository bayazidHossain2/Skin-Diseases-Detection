package com.easy.skin_diseases_backend.service.impl;


import com.easy.skin_diseases_backend.model.Diseases;
import com.easy.skin_diseases_backend.repository.DiseasesRepository;
import com.easy.skin_diseases_backend.service.DiseasesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiseasesServiceIMPL implements DiseasesService {

    @Autowired
    private DiseasesRepository diseasesRepository;

    @Override
    public void addDiseases(Diseases diseases) {
        diseasesRepository.save(diseases);
    }

    @Override
    public List<Diseases> getAllDiseases() {
        return diseasesRepository.findAll();
    }

    @Override
    public String getCount() {
        return ""+diseasesRepository.count();
    }
}
