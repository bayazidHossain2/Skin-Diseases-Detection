package com.easy.skin_diseases_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SkinDiseasesBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkinDiseasesBackendApplication.class, args);
	}

}
