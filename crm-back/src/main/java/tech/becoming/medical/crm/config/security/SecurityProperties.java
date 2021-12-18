package tech.becoming.medical.crm.config.security;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.List;

import static org.springframework.http.HttpMethod.*;
import static org.springframework.http.HttpMethod.HEAD;

@Component
@Configuration
@ConfigurationProperties("app.http.security")
@Setter
@Getter
public class SecurityProperties {

    private boolean enabled;
    private List<String> cors;
    private List<String> headers;
    private List<String> methods = List.of(GET.name(), POST.name(), PUT.name(), DELETE.name(), OPTIONS.name(), HEAD.name());
}
