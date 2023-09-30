package com.easy.skin_diseases_backend.service;

import com.easy.skin_diseases_backend.model.SearchHistory;

import java.util.List;

public interface SearchHistoryService {
    void addHistory(SearchHistory history);

    List<SearchHistory> getHistoryById(Long id);

    void deletById(Long id);

    Long getCount();

    List<Object[]> getCountByName();

//    Long getCountByName(String diseasesName);
}
