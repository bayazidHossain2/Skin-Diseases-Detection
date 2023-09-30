package com.easy.skin_diseases_backend.repository;

import com.easy.skin_diseases_backend.model.SearchHistory;
import com.easy.skin_diseases_backend.model.WebsiteContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SearchHistoryRepository extends JpaRepository<SearchHistory, Long> {
    List<SearchHistory> findByUserId(Long userId);

//    @Query("SELECT COUNT(p) FROM Product p WHERE p.diseasesName = :diseasesName")
//    Long countByName(@Param("diseasesName") String diseasesName);

    @Query("SELECT u.diseasesName,count(u) as groupCount from SearchHistory u group by u.diseasesName")
    List<Object[]> findAllGroupCount();
}
