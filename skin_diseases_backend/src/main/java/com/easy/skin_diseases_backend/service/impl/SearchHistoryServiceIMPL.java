package com.easy.skin_diseases_backend.service.impl;

import com.easy.skin_diseases_backend.model.SearchHistory;
import com.easy.skin_diseases_backend.repository.SearchHistoryRepository;
import com.easy.skin_diseases_backend.service.SearchHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class SearchHistoryServiceIMPL implements SearchHistoryService {
    @Autowired
    private SearchHistoryRepository historyRepository;

    @Override
    public void addHistory(SearchHistory history) {
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        history.setDate(myDateObj.format(myFormatObj));
        historyRepository.save(history);
    }

    @Override
    public List<SearchHistory> getHistoryById(Long id) {
        return historyRepository.findByUserId(id);
    }

    @Override
    public void deletById(Long id) {
        historyRepository.deleteById(id);
    }

    @Override
    public Long getCount() {
        return historyRepository.count();
    }

    @Override
    public List<Object[]> getCountByName() {
        List<Object[]> list = historyRepository.findAllGroupCount();

        return list;
    }

//    @Override
//    public Long getCountByName(String diseasesName) {
//        return historyRepository.countByName(diseasesName);
//    }


}
