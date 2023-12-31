package com.easy.skin_diseases_backend.service;

import com.easy.skin_diseases_backend.model.Diseases;

import java.util.List;

public interface DiseasesService {
    void addDiseases(Diseases diseases);

    List<Diseases> getAllDiseases();

    String getCount();

    Diseases getByTitle(String title);
}
