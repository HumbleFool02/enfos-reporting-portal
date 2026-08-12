package com.reportingportal.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration marks this class as a source of bean definitions, evaluated
// at startup rather than per-request.
@Configuration
public class CorsConfig {

    // @Bean tells Spring to register this method's return value as a
    // managed bean - here, the WebMvcConfigurer that carries our CORS rules.
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("http://localhost:5173")
                        .allowedMethods("GET");
            }
        };
    }
}
