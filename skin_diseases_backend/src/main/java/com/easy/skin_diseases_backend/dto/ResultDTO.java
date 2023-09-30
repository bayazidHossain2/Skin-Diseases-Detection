package com.easy.skin_diseases_backend.dto;

import lombok.Data;

@Data
public class ResultDTO {
    private String clas;
    private String confidence;


    public String getClas() {
        return clas;
    }

    public void setClas(String clas) {
        this.clas = clas;
    }

    public String getConfidence() {
        return confidence;
    }

    public void setConfidence(String confidence) {
        this.confidence = confidence;
    }
}
