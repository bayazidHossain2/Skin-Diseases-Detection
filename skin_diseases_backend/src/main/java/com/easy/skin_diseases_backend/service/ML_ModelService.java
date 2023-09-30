package com.easy.skin_diseases_backend.service;

import com.easy.skin_diseases_backend.dto.ResultDTO;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.MediaType;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;

@Service
public class ML_ModelService {
    private final WebClient webClient;

    public ML_ModelService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("http://localhost:8000").build();
    }

//    public Mono<Map<String, String>> callExternalApi() {
//        return webClient.get().uri("/predict")
//                .retrieve()
//                .bodyToMono();
//    }
    public Mono<ResultDTO> predict(MultipartFile imageResource) {
        // Create a MultipartBodyBuilder to build the request body
        MultipartBodyBuilder bodyBuilder = new MultipartBodyBuilder();

        // Add the image file as a part with a custom name ("imageFile" in this example)
        bodyBuilder.part("file", imageResource)
                .header("Content-Disposition", "form-data" + imageResource.getOriginalFilename() + "\"");

        // Make the POST request with the image file as part of the request body
        return webClient.post()
                .uri("/predict")
                .contentType(MediaType.MULTIPART_FORM_DATA)
                .body(BodyInserters.fromMultipartData(bodyBuilder.build()))
                .retrieve()
                .bodyToMono(ResultDTO.class);
    }
}

