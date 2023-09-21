package com.easy.skin_diseases_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"your.company.domain.package"})
@SpringBootApplication
public class SkinDiseasesBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkinDiseasesBackendApplication.class, args);
	}

}
