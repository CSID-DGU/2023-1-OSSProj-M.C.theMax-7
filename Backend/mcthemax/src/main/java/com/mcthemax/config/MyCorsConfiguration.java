package com.mcthemax.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyCorsConfiguration {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://mcthemax-server-alb-130935858.ap-northeast-2.elb.amazonaws.com")
                        .allowedMethods("GET", "POST")
                        .allowCredentials(true)
                        .maxAge(3600);
            }
        };
    }

}