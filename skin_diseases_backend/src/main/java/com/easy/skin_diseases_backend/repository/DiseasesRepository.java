package com.easy.skin_diseases_backend.repository;

import com.easy.skin_diseases_backend.model.Diseases;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseasesRepository extends JpaRepository<Diseases, Long> {

}
