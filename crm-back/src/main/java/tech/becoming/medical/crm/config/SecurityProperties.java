package tech.becoming.medical.crm.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
@Configuration
@ConfigurationProperties("app.http.security")
@Setter
@Getter
public class SecurityProperties {

    private boolean enabled;
    private String[] cors;
}
