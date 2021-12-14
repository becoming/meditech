package tech.becoming.medical.crm.config;

import com.fasterxml.jackson.databind.Module;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableConfigurationProperties
@Configuration
@RequiredArgsConstructor
public class MainConfig {

    private final SecurityProperties properties;

    @Bean
    public Module getTryModule() {
        return new TryModule();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins(properties.getCors());
            }
        };
    }
}
